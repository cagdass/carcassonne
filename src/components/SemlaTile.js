import React, { Component } from 'react';

import Tile from './Tile';

import ImageSource from  "../assets/images/tiles/Semla.png";

/*
  It looks like
  ccccc
  cgggg
  cgggg
  cgggg
  cgggg
*/

class SemlaTile extends Component {
	render () {
		let { x, y } = this.props;
		
		return (
			<Tile x={x} y={y}
				  imageSource={ImageSource} />
		);
	}
}

export default SemlaTile;
