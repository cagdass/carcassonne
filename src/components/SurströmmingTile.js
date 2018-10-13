import React, { Component } from 'react';

import Tile from './Tile';

import ImageSource from  "../assets/images/tiles/Surströmming.png";

/*
  It looks like
  ggggg
  ggggg
  rrerr
  ggrgg
  ggrgg
*/

class SurströmmingTile extends Component {
	render () {
		let { x, y } = this.props;
		
		return (
			<Tile x={x} y={y}
				  imageSource={ImageSource} />
		);
	}
}

export default SurströmmingTile;
