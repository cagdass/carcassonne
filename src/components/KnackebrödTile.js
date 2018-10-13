import React, { Component } from 'react';

import Tile from './Tile';

import ImageSource from  "../assets/images/tiles/Knackebröd.png";

/*
  It looks like
  ccccc
  ggggg
  ggrrr
  ggrgg
  ggrgg
*/

class KnackebrödTile extends Component {
	render () {
		let { x, y } = this.props;
		
		return (
			<Tile x={x} y={y}
				  imageSource={ImageSource} />
		);
	}
}

export default KnackebrödTile;
