import React, { Component } from 'react';

import Tile from './Tile';

import ImageSource from  "../assets/images/tiles/Kanelbulle.png";

class KanelbulleTile extends Component {
	render () {
		let { x, y } = this.props;
		
		return (
			<Tile x={x} y={y}
				  imageSource={ImageSource} />
		);
	}
}

export default KanelbulleTile;
