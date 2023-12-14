import { createElement } from "react";
import Grid from "./grid";
import { stringify } from "querystring";

class Tile{
    private x: number;
    private y: number;
    private tileElement: HTMLElement | null;
    private htmlLocation: { y: number; x: number } | null;
    private value:string;
    private color: string;

    constructor(tileContainer:HTMLElement | null) {
        this.tileElement = document.createElement("div");
        this.tileElement.classList.add("tile")
        tileContainer?.append(this.tileElement)
        this.x = -1
        this.y = -1
        this.value = "0";
        this.htmlLocation = null;
        this.color = "orange"
    }

    public setColor(color:string){
        if(this.tileElement){
        this.tileElement.style.backgroundColor = color
        }
        this.color = color;
    }
    private setTileStyle() {
        if (this.tileElement) {
            this.tileElement.style.borderRadius = "0.5vmin";
            this.tileElement.style.height = "3.8vmin";
            this.tileElement.style.width = "3.8vmin";
            this.tileElement.style.backgroundColor = this.color;
    
            // Add flex properties for centering content
            this.tileElement.style.display = "flex";
            this.tileElement.style.alignItems = "center";
            this.tileElement.style.justifyContent = "center";
            this.tileElement.style.color = "black";
            this.tileElement.style.fontSize = "2vmin";
            this.tileElement.innerText = this.value;
        }
    }
    

    public getHTMLlocation(x:number|null, y:number|null) {
        const element = document.getElementById(`${x}-${y}`);
    
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

    public setHTMLlocation() {
        this.htmlLocation = this.getHTMLlocation(this.x, this.y);
        
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
        // this.tileElement.style.animation = 'show 1s ease-in-out';
        }
    }
    


    

    


    public move(x: number, y: number, grid: Grid) {

        const destination = this.getHTMLlocation(x, y);
        const start = this.getHTMLlocation(this.x, this.y);
        // console.log(destination,start)
        
        if (this.htmlLocation) {
          const distance_x = destination.x - start.x;
          const distance_y = destination.y - start.y;
      
          // Set initial tile styles
          this.setHTMLlocation();
      
          // Trigger a reflow to ensure styles are applied before starting the animation
          void this.tileElement?.offsetHeight;
      
          // Set animation
          if (this.tileElement) {
            this.tileElement.style.setProperty('--translateX', `${distance_x}px`);
            this.tileElement.style.setProperty('--translateY', `${distance_y}px`);
            this.tileElement.style.animation = 'moveAnimation 0.225s ease-in-out';
      
            // Update tile styles after animation completes
            this.tileElement.onanimationend = () => {
              this.tileElement!.style.animation = 'none'; // Reset animation
              this.setX(x);
              this.setY(y);
              this.setHTMLlocation();
              grid.UpdatePosition(this);
              this.tileElement!.onanimationend = null; // Remove the event listener
            };
          }
        }
      }
      
    public moveTilesSequentially = (moves: string[][], grid: Grid) => {
        const moveWithDelay = (index: number) => {
            if (index < moves.length) {
            const [startLocation, endLocation] = moves[index];
            const startLocationArray = startLocation.split('-');
            const endLocationArray = endLocation.split('-');
            const start = this.getHTMLlocation(parseInt(startLocation[0]),parseInt(startLocation[1]))
            const end = this.getHTMLlocation(parseInt(endLocation[0]),parseInt(endLocation[1]))
            this.move(parseInt(endLocationArray[0]),parseInt(endLocationArray[1]), grid);
            
            // Add a delay before initiating the next move
            setTimeout(() => {
                moveWithDelay(index + 1);
            }, /* Set your desired delay in milliseconds, e.g., */ 500);
            }
        };
        
        // Start the sequence
        moveWithDelay(0);
        
        };

}

export default Tile;