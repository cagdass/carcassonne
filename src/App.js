import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Image } from 'react-konva';

import Game from './components/Game';

import BackgroundSource from './assets/images/background.jpeg';
import CarcassonneLogoSource from './assets/images/carcassonne-logo.png';

const container_style = {
	backgroundImage: `url(${BackgroundSource})`,
};

class App extends Component {
	state = {
		initX: 200,
		initY: 200,
		tilesHigh: 3,
		tilesWide: 3,
	}
	
	handleCanvasClick = (event) => {
		console.log(JSON.stringify(event));
	}
	
	render() {
		let { initX, initY } = this.state;
		
		return (
			<div style={container_style}>
			  <div>
				<img src={CarcassonneLogoSource}
					 width={400} />
			  </div>
			  <Game />
			</div>			
		);
	}
}

export default App;
