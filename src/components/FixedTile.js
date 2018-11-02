import React, { Component } from 'react';
import { Image } from 'react-konva';

import ImageSource from  "../assets/images/tiles/Blodkorv.png";

class FixedTile extends Component {
	constructor (props) {
		super(props);
		this.state = {
			height: 50, width:50,
			image: null,
			rotation: 0,
			x: props.x, y: props.y,
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

	render () {
		let { height, width,
			  image,
			  x, y,} = this.state;
		
		return (
			<Image height={height} width={width}
				   x={x} y={y}
				   image={image} />
		);
	}
}

export default FixedTile;
