const posSizes = [9, 30];

let mN: [number, number];


export class Sudoku {
    private size: number = 0;
    private board: number[][] = [];

    constructor() {
        this.initBoard();
    }


    initBoard() {
        this.size = posSizes[0];
        let newBoard: number[][] = [];
        for (let i = 0; i < this.size; i++) {
            let row: number[] = [];
            for (let j = 0; j < this.size; j++) {
                row.push(0)
            }
            newBoard.push(row)
        }
        this.board = newBoard;
    }

    generate() {
        let times = randomNumberRange(5, 10);
        console.log("Times: " + times);
        for (let t = 1; t < times; t++) {
            let mN = randomColAndRow();
            // console.log("Picked cell: [" + mN[0] + "," + mN[1] + "]");
            let value = randomNumberRange(1, 9);
            // console.log("Random value to fill: " + value);
            this.board[mN[0]][mN[1]] = value
        }

    }

    isUndefined(): boolean {
        try {
            for (let i = 0; i < this.size; i++)
                for (let k = 0; k < this.size; k++)
                    if (this.board[i][k] == undefined) {
                        return true;
                    }
        } catch (e) {
            console.log("Problem while checking board if there are undefined cells: " + e)
        }
        return false;
    }



    printBoard(): void {
        var m = 0;
        var n = 0;
        console.log(this.board.length)
        try {
            for (m = 0; m < this.size; m++) 
                {
                    if (m % 3 === 0) {
                        printWholeLine(this.size);
                    }
                    let row=""
                    // console.log(m + "th row: " + this.board[m].length)
                    for (n = 0; n < this.size; n++){
                        if (n % 3 === 0) {
                            row+="|"
                        }
                        let cell = this.board[m][n];
                  
                        if (cell === 0) {
                            row+="*"
                        }
                        else if (cell > 0 && cell <= 9) {
                            row+=cell
                        }
                        else {
                            throw new Error("Invalid argument")
                        }
                    }
                    console.log(row)
                }

        }
        catch (e) {
            console.log("Problem with printing board: " + e)
        }
    }

}


function randomColAndRow() {
    var randomCol = randomNumberRange(0, 8);
    var randomRow = randomNumberRange(0, 8);
    mN = [randomRow, randomCol];
    return mN

}

function getQuadrant(row: number, col: number) {

}

function randomNumberRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function printWholeLine(size: number) {
    let line="";
    for (let i = 0; i < size; i++) {
        line+="-"
    }
    console.log(line)
}




