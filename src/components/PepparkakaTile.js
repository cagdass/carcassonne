import React, { Component } from 'react';

import Tile from './Tile';

import ImageSource from  "../assets/images/tiles/Pepparkaka.png";

/*
  It looks like
  cgggc
  ccccc
  csccc
  ccccc
  cgggc
*/

class PepparkakaTile extends Component {
	render () {
		let { x, y } = this.props;
		
		return (
			<Tile x={x} y={y}
				  imageSource={ImageSource} />
		);
	}
}

export default PepparkakaTile;
