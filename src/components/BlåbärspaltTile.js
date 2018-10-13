import React, { Component } from 'react';

import Tile from './Tile';

import ImageSource from  "../assets/images/tiles/Blåbärspalt.png";

/*
  It looks like
  cgggc
  ccccc
  ccccc
  ccccc
  cgggc
*/

class BlåbärspaltTile extends Component {
	render () {
		let { x, y } = this.props;
		
		return (
			<Tile x={x} y={y}
				  imageSource={ImageSource} />
		);
	}
}

export default BlåbärspaltTile;
