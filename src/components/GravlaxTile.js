import React, { Component } from 'react';

import Tile from './Tile';

import ImageSource from  "../assets/images/tiles/Gravlax.png";

/*
  It looks like
  ccccc
  ggcgg
  ggggg
  ggcgg
  ccccc
*/

class GravlaxTile extends Component {
	render () {
		let { x, y } = this.props;
		
		return (
			<Tile x={x} y={y}
				  imageSource={ImageSource} />
		);
	}
}

export default GravlaxTile;
