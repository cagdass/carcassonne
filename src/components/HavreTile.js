import React, { Component } from 'react';
import Tile from './Tile';

import config from '../config.js';

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
				  north={config.TILE.CITY}
				  east={config.TILE.GRASS}
				  south={config.TILE.ROAD}
				  west={config.TILE.ROAD}
				  imageSource={ImageSource} />
		);
	}
}

export default HavreTile;
