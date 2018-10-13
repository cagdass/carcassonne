import React, { Component } from 'react';

import Tile from './Tile';

import ImageSource from  "../assets/images/tiles/Trocadero.png";

/*
  It looks like
  ggrgg
  ggrgg
  rrerr
  ggrgg
  ggrgg
*/

class TrocaderoTile extends Component {
	render () {
		let { x, y } = this.props;
		
		return (
			<Tile x={x} y={y}
				  imageSource={ImageSource} />
		);
	}
}

export default TrocaderoTile;
