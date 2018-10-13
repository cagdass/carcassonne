import React, { Component } from 'react';

import Tile from './Tile';

import ImageSource from  "../assets/images/tiles/Snus.png";

/*
  It looks like
  ggrgg
  ggrgg
  ggrgg
  ggrgg
  ggrgg
*/

class SnusTile extends Component {
	render () {
		let { x, y } = this.props;
		
		return (
			<Tile x={x} y={y}
				  imageSource={ImageSource} />
		);
	}
}

export default SnusTile;
