import React, { Component } from 'react';
import { Image } from 'react-konva';

class Tile extends Component {
	constructor (props) {
		super(props);
		this.state = {
			dragging: false,
			image: null,
			rotation: 0,
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

	handleDrag (x, y) {
		console.log(JSON.stringify(x,y));
	}

	handleDragEnd (event) {
		let { x, y } = event.target.attrs;
		
		this.setState({
			dragging: false,
			x: x,
			y: y,
		});
	}

	handleDragStart (event) {		
		this.setState({
			dragging: true,
		});
	}

	setPosition (x, y) {
		this.setState({ x, y });
	}
	
	render() {
		let { image, x, y } = this.state;
		
		return (
			<Image x={x} y={y}				   
				   draggable
				   image={image}
				   onDrag={this.handleDrag.bind(this)}
				   onDragEnd={this.handleDragEnd.bind(this)}
				   onDragStart={this.handleDragStart.bind(this)} />
		);
	}
}

export default Tile;
