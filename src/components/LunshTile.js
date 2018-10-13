import React, { Component } from 'react';

import Tile from './Tile';

import ImageSource from  "../assets/images/tiles/Lunsh.png";

/*
  It looks like
  ccccc
  csccc
  ccccc
  ccccc
  cgrgc
*/

class LunshTile extends Component {
	render () {
		let { x, y } = this.props;
		
		return (
			<Tile x={x} y={y}
				  imageSource={ImageSource} />
		);
	}
}

export default LunshTile;
