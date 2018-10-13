import React, { Component } from 'react';

import Tile from './Tile';

import ImageSource from  "../assets/images/tiles/Fiskbullar.png";

/*
  It looks like
  ccccc
  ggggg
  rrerr
  ggrgg
  ggrgg
*/

class FiskbullarTile extends Component {
	render () {
		let { x, y } = this.props;
		
		return (
			<Tile x={x} y={y}
				  imageSource={ImageSource} />
		);
	}
}

export default FiskbullarTile;
