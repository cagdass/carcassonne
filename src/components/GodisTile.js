import React, { Component } from 'react';

import Tile from './Tile';

import ImageSource from  "../assets/images/tiles/Godis.png";

/*
  It looks like
  ggggg
  ggggg
  rrrgg
  ggrgg
  ggrgg
*/

class GodisTile extends Component {
	render () {
		let { x, y } = this.props;
		
		return (
			<Tile x={x} y={y}
				  imageSource={ImageSource} />
		);
	}
}

export default GodisTile;
