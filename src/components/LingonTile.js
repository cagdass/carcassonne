import React, { Component } from 'react';

import Tile from './Tile';

import ImageSource from  "../assets/images/tiles/Lingon.png";

/*
  It looks like
  ccccc
  ccccc
  ccccc
  ccccc
  cgggc
*/

class LingonTile extends Component {
	render () {
		let { x, y } = this.props;
		
		return (
			<Tile x={x} y={y}
				  imageSource={ImageSource} />
		);
	}
}

export default LingonTile;
