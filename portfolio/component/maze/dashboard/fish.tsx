import Grid from "./grid";
import Tile from "./tile";

export default class Fish extends Tile{
    private vision: number[][] 
    constructor(tileContainer:HTMLElement | null){
        super(tileContainer)
        this.vision =  [ 
        [1,1,1],
        [1,0,1],
        [1,1,1],
    ]
    }


public distance(x:number, y:number){

    const distance_x = x > this.getX() ? x - this.getX(): this.getX() - x
    const distance_y = y > this.getY() ? y - this.getY(): this.getY() - y

    const distance = Math.sqrt(distance_x ** 2 + distance_y ** 2)
    return distance
}

public async seek(endpoint_x: number, endpoint_y: number, grid: Grid) {
    let distance = this.distance(endpoint_x, endpoint_y);

    while (distance > 0.5) {
        const x_dir = this.getX() < endpoint_x ? 2 : -2;
        const y_dir = this.getY() < endpoint_y ? 2 : -2;

        const new_x = this.getX() + x_dir;
        const new_y = this.getY() + y_dir;

        await new Promise(resolve => setTimeout(resolve, 1100));

        // Check if the current position is close enough to the target
        if (this.distance(endpoint_x, endpoint_y) ==2) {
            this.move(endpoint_x ,endpoint_y, grid);
     
        } 
 
        else {
            if (Math.abs(endpoint_x - new_x) > Math.abs(endpoint_y - new_y)) {
                this.move(new_x, this.getY(), grid);
            } else {
                this.move(this.getX(), new_y, grid);
            }
        }

        distance = this.distance(endpoint_x, endpoint_y);
    }
}


  
}