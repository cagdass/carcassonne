import React, { Component } from 'react';

import Tile from './Tile';

import ImageSource from  "../assets/images/tiles/Middag.png";

/*
  It looks like
  ccccc
  cgggg
  cgrrr
  cgrgg
  cgrgg
*/

class MiddagTile extends Component {
	render () {
		let { x, y } = this.props;
		
		return (
			<Tile x={x} y={y}
				  imageSource={ImageSource} />
		);
	}
}

export default MiddagTile;
