import{ Cell } from "./Cell.js"

const GRID_SIZE = 4;
const CELLS_COUNT = GRID_SIZE * GRID_SIZE


export class Grid {
	constructor(gridElement){
		this.cells = []
		for(let i = 0; i < CELLS_COUNT; i++){
			this.cells.push(
				new Cell(gridElement, x , y)
			)
		}
	}
}