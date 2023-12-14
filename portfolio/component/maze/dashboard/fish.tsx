import { stringify } from "querystring";
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

    while (distance !=0) {
        const x_dir = this.getX() < endpoint_x ? 2 : -2;
        const y_dir = this.getY() < endpoint_y ? 2 : -2;

        const new_x = this.getX() + x_dir;
        const new_y = this.getY() + y_dir;

        await new Promise(resolve => setTimeout(resolve, 250));

        // Check if the current position is close enough to the target
        if (this.distance(endpoint_x, endpoint_y) ==2) {
            this.move(endpoint_x ,endpoint_y, grid);
            return 
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
private randomChoice(arr:any) {
    return arr[Math.floor(arr.length * Math.random())];
}



public async explore(grid: Grid) {
    const visited_nodes: number[][] = [];
    const unvisited_nodes = grid.setAllNeighbors();
    var x = this.getX();
    var y = this.getY();
    var key = `${x},${y}`;
    var node = unvisited_nodes[key];
    visited_nodes.push([x,y])
    this.setValue(JSON.stringify(visited_nodes.length));
    while(Object.keys(unvisited_nodes).length != 0){
    var neighbors = this.filterVisitedAndNullCoords(node, visited_nodes);

    delete unvisited_nodes[key];

    
    const random_position = this.randomChoice(neighbors);
    if(random_position == null){

        return visited_nodes.length;
    }

    await this.delay(250);
    this.move(random_position[0], random_position[1], grid);
    visited_nodes.push(random_position);
    this.setValue(JSON.stringify(visited_nodes.length));
    
    key = `${random_position[0]},${random_position[1]}`;
    node = unvisited_nodes[key];
}
}


private filterVisitedAndNullCoords(cell: (number[] | null)[] | null, visited_nodes: number[][]): number[][] | null {
    return cell
        ? (cell
              .filter(coord => coord !== null && !visited_nodes.some(visitedCoord => this.areCoordsEqual(visitedCoord, coord as number[]))) as number[][])
        : null;
}



private areCoordsEqual(coord1: number[], coord2: number[]): boolean {
    return coord1[0] === coord2[0] && coord1[1] === coord2[1];
}

private async delay(milliseconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}




}

  
