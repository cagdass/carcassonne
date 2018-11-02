import React, { Component, Fragment } from 'react';
import Konva from 'konva';
import { render } from 'react';
import { Image,
		 Layer,
		 Rect,
		 Stage,} from 'react-konva';

import Tile from './Tile';
import FixedTile from './FixedTile';

const MAX_TILES = 32;
const TILE_WIDTH = 50;

class Game extends Component {
	constructor (props) {
		super(props);
		this.state = {
			activeTilePosX: 0, activeTilePosY: 0,
			activeTileX: 0, activeTileY: 0,
			dragging: true,
			tiles: Array(MAX_TILES).fill({}).map(el => Array(MAX_TILES).fill({})),
			xOffset: 0,
			yOffset: 0,
		};
	}

	componentDidMount () {
		let { tiles } = this.state;
		
		tiles[MAX_TILES/2][MAX_TILES/2] = {
			tile: "havre",
		};

		this.setState({ tiles }, () => {
			this.setPossiblePositions();
		});
	}

	handleGameClick = (event) => {

	}

	handleGameDragStart = (event) => {
		this.setState({ dragging: true });
	}

	handleGameDragEnd = (event) => {
		let { x, y } = event.target.attrs;
		
		this.setState({
			dragging: false,
			xOffset: x,
			yOffset: y,
		});
	}

	updateActiveTilePosition = (activeTilePosX, activeTilePosY, rotation) => {
		let { positions = [],
			  xOffset, yOffset } = this.state;
		let actualActiveTilePosX = activeTilePosX || 0;
		let actualActiveTilePosY = activeTilePosY || 0;
		if (rotation === 1) {
			actualActiveTilePosX -= TILE_WIDTH;
		}
		else if (rotation === 2) {
			actualActiveTilePosX -= TILE_WIDTH;
			actualActiveTilePosY -= TILE_WIDTH;
		}
		else if (rotation === 3) {
			actualActiveTilePosY -= TILE_WIDTH;
		}
		
		let activeTileX = Math.floor((actualActiveTilePosX - xOffset + 25) / 50) || 0;
		let activeTileY = Math.floor((actualActiveTilePosY - yOffset + 25) / 50) || 0;

		this.setState({ activeTileX, activeTileY });

		if (this.isPossible(activeTileX, activeTileY)) {
			console.log('ya4s');
			let newActiveTilePosX = (activeTileX * 50) + xOffset;
			let newActiveTilePosY = (activeTileY * 50) + yOffset;

			if (rotation === 1) {
				newActiveTilePosX += TILE_WIDTH;
			}
			else if (rotation === 2) {
				newActiveTilePosX += TILE_WIDTH;
				newActiveTilePosY += TILE_WIDTH;
			}
			else if (rotation === 3) {
				newActiveTilePosY += TILE_WIDTH;
			}

			this.setState({
				activeTilePosX: newActiveTilePosX,
				activeTilePosY: newActiveTilePosY
			});
		} else {			
			this.setState({
				activeTilePosX: activeTilePosX || 0,
				activeTilePosY: activeTilePosY || 0
			});
		}
	}

	isPossible = (x, y) => {
		let { positions = [] } = this.state;

		for (let i = 0; i < positions.length; i++) {
			let position = positions[i];

			if (x === position[0] && y === position[1]) {
				return true;
			}
		}

		return false;
	}

	setPossiblePositions = () => {
		let { tiles } = this.state;
		let positions = [];
		
		for (let r = 0; r < MAX_TILES; r++) {
			for (let c = 0; c < MAX_TILES; c++) {
				if (Object.keys(tiles[r][c]).length === 0
					&& ((r-1 > 0 && Object.keys(tiles[r-1][c]).length > 0)
						|| (r+1 < MAX_TILES && Object.keys(tiles[r+1][c]).length > 0)
						|| (c-1 > 0 && Object.keys(tiles[r][c-1]).length > 0)
						|| (c+1 < MAX_TILES && Object.keys(tiles[r][c+1]).length > 0))) {
					positions.push([r, c]);
				}
			}
		}

		this.setState({ positions });
	}

	shouldRenderRect = (rowIndex, columnIndex) => {
		let { tiles } = this.state;
		
		if (rowIndex + 1 < MAX_TILES && Object.keys(tiles[rowIndex+1][columnIndex]).length > 0) {
			return true;
		}
		else if (rowIndex - 1 >= 0 && Object.keys(tiles[rowIndex-1][columnIndex]).length > 0) {
			return true;
		}
		else if (columnIndex + 1 < MAX_TILES && Object.keys(tiles[rowIndex][columnIndex+1]).length > 0) {
			return true;
		}
		else if (columnIndex - 1 >= 0 && Object.keys(tiles[rowIndex][columnIndex-1]).length > 0) {
			return true;
		}

		return false;
	}

	renderTile = (tile, rowIndex, columnIndex) => {
		if (Object.keys(tile).length > 0) {
			return (
				<FixedTile tile={"blodkorv"}
						   x={rowIndex * 50}
						   y={columnIndex * 50} />
			);
		} else {
			if (this.shouldRenderRect(rowIndex, columnIndex)) {
				return (
					<Rect fill="black"
						  opacity={0.5}
						  shadowColor="yellow"
						  x={rowIndex * 50} y={columnIndex * 50}
						  width={50} height={50} />
				);
			} else {
				return (
					<Fragment />
				);
			}
		}
	}

	renderTileRow = (tileRow, rowIndex) => {
		return (
			<Fragment>
			  {tileRow.map((tile, columnIndex) => this.renderTile(tile, rowIndex, columnIndex))}
			</Fragment>
		);
	}	

	render () {
		let { activeTilePosX, activeTilePosY,
			  positions = [],
			  tiles = [] } = this.state;

		return (
			<Stage height={window.innerHeight}
				   width={window.innerWidth}>
			  <Layer draggable
					 onDragStart={this.handleGameDragStart}
					 onDragEnd={this.handleGameDragEnd}>
				{tiles.map((tileRow, index) => this.renderTileRow(tileRow, index))}
			  </Layer>
			  <Layer>
				<Tile positions={positions}
					  tile="blodkorv"
					  updateTilePosition={this.updateActiveTilePosition}
					  x={activeTilePosX} y={activeTilePosY} />
			  </Layer>
			</Stage>
		);
	}
}

export default Game;
