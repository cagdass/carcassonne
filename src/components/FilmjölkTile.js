import React, { Component } from 'react';

import Tile from './Tile';

import ImageSource from  "../assets/images/tiles/Filmjölk.png";

/*
  It looks like
  ccccc
  ccccc
  cccgc
  ccrcc
  cgrgc
*/

class FilmjölkTile extends Component {
	render () {
		let { x, y } = this.props;
		
		return (
			<Tile x={x} y={y}
				  imageSource={ImageSource} />
		);
	}
}

export default FilmjölkTile;
