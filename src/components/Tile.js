import React, { Component } from 'react';
import { Image } from 'react-konva';

class Tile extends Component {
	constructor (props) {
		super(props);
		this.state = {
			dragging: false,
			height: 100,
			image: null,
			rotation: 0,
			width: 100,
			x: props.x,
			y: props.y,
		};
	}
	
	componentDidMount() {
		let { imageSource } = this.props;
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

	handleDrag = (x, y) => {
		console.log(JSON.stringify(x,y));
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
				   onDrag={this.handleDrag}
				   onDragEnd={this.handleDragEnd}
				   onDragStart={this.handleDragStart}
				   rotation={rotation * 90}
				   width={width}
				   x={x} y={y} />
		);
	}
}

export default Tile;
