import { createElement } from "react";

class Tile{
    private x: number | null;
    private y: number | null;
    private tileElement: HTMLElement | null;
    private htmlLocation: { y: number; x: number } | null;
    private value:string | null;

    constructor(tileContainer:HTMLElement | null) {
        this.tileElement = document.createElement("div");
        this.tileElement.classList.add("tile")
        tileContainer?.append(this.tileElement)
        this.x = null
        this.y = null
        this.value = null;
        this.htmlLocation = null;
    }

    private setTileStyle(){
        if(this.tileElement){
            this.tileElement.style.borderRadius = "0.5vmin"
            this.tileElement.style.height = "3.8vmin";
            this.tileElement.style.width = "3.8vmin";
            this.tileElement.style.backgroundColor = "orange"
        }
    }



    private getHTMLlocation() {
        const element = document.getElementById(`${this.x}-${this.y}`);
    
        if (element) {
            const rect = element.getBoundingClientRect();
    
            // rect.top and rect.left give the top-left coordinates of the element
            const top = rect.top;
            const left = rect.left;
    
            // console.log(`Top: ${top}px, Left: ${left}px`);
            return { y: top, x: left };
        }
    
        // Return a default location if the element is not found
        return { y: -1, x: -1 };
    }

    private setHTMLlocation() {
        this.htmlLocation = this.getHTMLlocation();
        
        if (this.tileElement) {
            // Assuming htmlLocation.x and htmlLocation.y are in pixels
            const xValue = this.htmlLocation.x + 'px';
            const yValue = this.htmlLocation.y + 'px';
            this.tileElement.style.position = 'absolute';
            this.tileElement.style.top = yValue;
            this.tileElement.style.left = xValue;
            this.setTileStyle()
        }
    }

    
    public getX(){
        return this.x
    }
    public getY(){
        return this.y
    }

    public setX(x:number){
        this.x = x
    }
    public setY(y:number){
        this.y = y
    }

    public getValue(){
        return this.value
    }
    public setValue(value:string){
        this.value = value
    }

    public setLocation(){
        this.setHTMLlocation()
        if(this.tileElement){
        this.tileElement.style.animation = 'show 0.2s ease-in-out';
        }
    }
    

}

export default Tile;