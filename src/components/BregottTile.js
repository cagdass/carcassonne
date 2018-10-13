import React, { Component } from 'react';

import Tile from './Tile';

import ImageSource from  "../assets/images/tiles/Bregott.png";

/*
  It looks like
  ccccc
  csccg
  cccgr
  ccggg
  cgrgg
*/

class BregottTile extends Component {
	render () {
		let { x, y } = this.props;
		
		return (
			<Tile x={x} y={y}
				  imageSource={ImageSource} />
		);
	}
}

export default BregottTile;
