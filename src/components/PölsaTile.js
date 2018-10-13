import React, { Component } from 'react';

import Tile from './Tile';

import ImageSource from  "../assets/images/tiles/Pölsa.png";

/*
  It looks like
  ccccc
  csccg
  cccgg
  ccggg
  cgggg
*/

class PölsaTile extends Component {
	render () {
		let { x, y } = this.props;
		
		return (
			<Tile x={x} y={y}
				  imageSource={ImageSource} />
		);
	}
}

export default PölsaTile;
