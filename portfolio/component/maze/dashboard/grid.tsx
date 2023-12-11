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
            this.setCellAndGapStyles('white','black','1em');
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

    // Rest of the class...

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
