import { useEffect } from "react";

const GRID_SIZE = 7;
const CELL_SIZE = '10vmin'; // Adjusted to be a string
const CELL_GAP = '1vmin'; // Adjusted to be a string

export default class Grid {
    private gridElement: HTMLElement | null;

    constructor(gridElement: HTMLElement | null) {
        console.log('Grid constructor called with element:', gridElement);
        this.gridElement = gridElement;

        if (this.gridElement) {
            this.setGridStyles();
            this.setCellAndGapStyles('white','black','1vmin');
            this.setTileStyles(0,1,4.66,1)
        }
    }

    private setGridStyles() {
        // Set grid styles
        this.gridElement!.style.display = 'grid';
        this.gridElement!.style.gridTemplateColumns = `repeat(${GRID_SIZE}, ${CELL_SIZE})`;
        this.gridElement!.style.gridTemplateRows = `repeat(${GRID_SIZE}, ${CELL_SIZE})`;
        this.gridElement!.style.backgroundColor = 'transparent';
        this.gridElement!.style.gap = CELL_GAP;
        this.gridElement!.style.border = `1vmin solid white`;
        this.gridElement!.style.padding = CELL_GAP;
    }

    public setTileStyles(x: number, y: number,shiftx:number,shifty:number) {
        if (this.gridElement) {
            const tileElement = this.gridElement.querySelector('.tile') as HTMLElement;

            // Set styles for .tile element based on --x and --y
            tileElement.style.position = "absolute"
            tileElement.style.backgroundColor = "red"
            tileElement.style.borderRadius = '1vmin'
            tileElement.style.width = CELL_SIZE;
            tileElement.style.height = CELL_SIZE;
            tileElement.style.top = `calc( ${y} + ${shifty}) * (${CELL_SIZE} + ${CELL_GAP}) + ${CELL_GAP})`;
            tileElement.style.left = `calc(${x} + ${shiftx}) * (${CELL_SIZE} + ${CELL_GAP}) + 2 * ${CELL_GAP})`;
        }
    }


    public setCellAndGapStyles(cellBackgroundColor: string, gapBackgroundColor: string, borderRadius: string) {
        // Set styles for .cell elements
        const cellElements = this.gridElement!.querySelectorAll('.cell');
        cellElements.forEach((cellElement) => {
            (cellElement as HTMLElement).style.backgroundColor = cellBackgroundColor;
            (cellElement as HTMLElement).style.borderRadius = borderRadius;
        });

        // Set styles for .gap elements
        const gapElements = this.gridElement!.querySelectorAll('.gap');
        gapElements.forEach((gapElement) => {
            (gapElement as HTMLElement).style.backgroundColor = gapBackgroundColor;
            (gapElement as HTMLElement).style.borderRadius = borderRadius;
        });
    }
}
