import React, { Component } from 'react';
import Tile from './Tile';

import config from '../config.js';
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
	updateParent = () => {
		this.props.updateParent(this.props.id, this.state);		
	}

	updateThis = (state) => {
		this.setState(state);
	}
	
	render () {
		let { x, y } = this.props;
		
		return (
			<Tile x={x} y={y}
				  north={config.TILE.ROAD}
				  east={config.TILE.ROAD}
				  south={config.TILE.ROAD}
				  west={config.TILE.ROAD}
				  updateParent={this.updateThis}
				  imageSource={ImageSource} />
		);
	}
}

export default TrocaderoTile;
