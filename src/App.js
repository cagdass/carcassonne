import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Image } from 'react-konva';

import KanelbulleTile from './components/KanelbulleTile';
import HavreTile from './components/HavreTile';

import BackgroundSource from './assets/images/background.jpeg';
import CarcassonneLogoSource from './assets/images/carcassonne-logo.png';

const container_style = {
	backgroundImage: `url(${BackgroundSource})`,
};

class App extends Component {
	render() {
		return (
			<div style={container_style}>
			  <div>
				<img src={CarcassonneLogoSource}
					 width={400} />
			  </div>
			  <Stage draggable
					 height={window.innerHeight}
					 width={window.innerWidth}>			   
				<Layer draggable>
				  <KanelbulleTile x={10} y={10} />
				  <HavreTile x={150} y={10} />
				</Layer>
			  </Stage>
			</div>			
		);
	}
}

export default App;
