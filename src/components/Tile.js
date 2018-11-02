import React, { Component } from 'react';
import { Image } from 'react-konva';

import ImageSource from  "../assets/images/tiles/Havre.png";

class Tile extends Component {
	constructor (props) {
		super(props);
		this.state = {
			dragging: false,
			height: 50,
			image: null,
			rotation: 0,
			width: 50,
			x: props.x,
			y: props.y,
		};
	}
	
	componentDidMount () {
		let imageSource = ImageSource;
		const image = new window.Image();
		image.src = imageSource;
		image.onload = () => {
			// setState will redraw layer
			// because "image" property is changed
			this.setState({
				image: image
			});
		};
	}

	componentWillUnmount () {
		window.removeEventListener('mousemove', this.handleMouseMove);
		window.removeEventListener('mouseup', this.handleMouseUp);
	}

	componentWillReceiveProps = (newProps) => {
		let { x, y } = this.state;
		
		this.setState({
			x: newProps.x || x,
			y: newProps.y || y,
		});
	}

	handleClick = (evt) => {
		let { height, rotation, width, x, y } = this.state;

		switch(rotation) {
		case 0:
			x += width;
			break;
		case 1:
			y += height;
			break;
		case 2:
			x -= width;
			break;
		case 3:
			y -= height;
			break;
		default:
		}

		this.setState({
			rotation: (rotation + 1) % 4,
			x, y,
		});
	};

	handleDragEnd = (event) => {
		let { x, y } = event.target.attrs;
		
		this.setState({
			dragging: false,
			x: x,
			y: y,
		});
	};

	handleDragStart = (event) => {		
		this.setState({
			dragging: true,
		});
	};

	handleEvent = (event) => {
		window.addEventListener('mousemove', this.handleMouseMove);
		window.addEventListener('mouseup', this.handleMouseUp);		
	}
	
	handleMouseMove = ({clientX, clientY}) => {
		
	}

	handleMouseUp = (event) => {
		let { rotation,
			  x, y } = this.state;
		this.props.updateTilePosition(x, y, rotation);

		window.removeEventListener('mousemove', this.handleMouseMove);
		window.removeEventListener('mouseup', this.handleMouseUp);
	}

	setPosition = (x, y) => {
		this.setState({ x, y });
	}
	
	render() {
		let { classes } = this.props;
		let { height, image, rotation, width, x, y } = this.state;
		
		return (
			<Image draggable				   
				   height={height}
				   image={image}
				   onClick={this.handleClick}
				   onDragEnd={this.handleDragEnd}
				   onDragStart={this.handleDragStart}
				   onMouseDown={this.handleEvent}
				   rotation={rotation * 90}
				   width={width}
				   x={x} y={y} />
		);
	}
}

export default Tile;
