import React, { Component } from 'react';

import Tile from './Tile';

import ImageSource from  "../assets/images/tiles/Blodkorv.png";

/*
  It looks like
  ccccc
  ccccg
  cccgg
  ccggg
  cgggg
*/

class BlodkorvTile extends Component {
	render () {
		let { x, y } = this.props;
		
		return (
			<Tile x={x} y={y}
				  imageSource={ImageSource} />
		);
	}
}

export default BlodkorvTile;
