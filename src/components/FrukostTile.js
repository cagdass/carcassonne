import React, { Component } from 'react';

import Tile from './Tile';

import ImageSource from  "../assets/images/tiles/Frukost.png";

/*
  It looks like
  ggggg
  ggggg
  ggmgg
  ggggg
  ggggg
*/

class FrukostTile extends Component {
	render () {
		let { x, y } = this.props;
		
		return (
			<Tile x={x} y={y}
				  imageSource={ImageSource} />
		);
	}
}

export default FrukostTile;
