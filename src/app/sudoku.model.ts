export class Sudoku {
    private size:number=9;
    private board: number[][];

    constructor(){
        this.board=this.initBoard();
    }


    private initBoard(): number[][] {
        var board = new Array<Array<number>>(9);
        for(let i = 0; i < this.size; i++){
            var row =new Array(9);
            this.board.push(row);
        }
        return board;
    }

    private printBoard() : void{
        var m=0;
        var n=0;
        try{
            for(let row of this.board){
            if(n%3===0){
                this.printWholeLine();
            }
            for(let cell of row){
                if(m%3===0){
                    this.printVerLine();
                }
                if(cell===0){
                    console.log(" ")
                }
                else if(cell>0 && cell>=9){
                    console.log(cell)
                }
                else{
                    throw new Error("Invalid argument")
                }
                m++;
            }
            n++;
            this.printWholeLine();
        }
        this.printWholeLine();
    }
    catch(e){
        console.log("Problem with printing board: " + e)
    }
    }

    private setCell(row:number, col:number, value: number){
        this.board[row][col]=value;
    }

    printWholeLine(): void{
        for(let i=0; i<this.size; i++){
            console.log("-")
        }
    }
    
    printVerLine() : void{
        console.log("|")
    }

}



