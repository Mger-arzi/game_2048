export class Tile{
	constructor(gridElemnt){
		this.tileElement = document.createElement("div")
		this.tileElement.classList.add("tile")
		this.value = Math.random() > 0.5 ? 2 : 4;
		this.tileElement.textContent = this.value;
		gridElemnt.appent(this.tileElement)
	}
}