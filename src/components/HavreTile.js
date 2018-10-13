import React, { Component } from 'react';

import Tile from './Tile';

import ImageSource from  "../assets/images/tiles/Havre.png";

/*
  It looks like
  ccccc
  ggcgg
  rrrgg
  ggrgg
  ggrgg
*/

class HavreTile extends Component {
	render () {
		let { x, y } = this.props;
		
		return (
			<Tile x={x} y={y}
				  imageSource={ImageSource} />
		);
	}
}

export default HavreTile;
