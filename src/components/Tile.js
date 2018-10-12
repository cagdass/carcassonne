import React, { Component } from 'react';
import { Image } from 'react-konva';

class Tile extends Component {
	constructor (props) {
		super(props);
		this.state = {
			image: null,
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

	handleDragEnd (e) {
		console.log(JSON.stringify(e));
	}

	handleDragStart (e) {
		console.log(JSON.stringify(e));
	}
	
	render() {
		let { x, y } = this.props;
		
		return (
			<Image x={x} y={y}				   
				   draggable
				   image={this.state.image}
				   onDrag={this.handleDrag.bind(this)}
				   onDragEnd={this.handleDragEnd.bind(this)}
				   onDragStart={this.handleDragStart.bind(this)} />
		);
	}
}

export default Tile;
