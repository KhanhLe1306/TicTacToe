export default class Game{

    constructor(){
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }

    changeTurn(){
        this.turn === "X" ? this.turn = "O" : this.turn = "X";
    }

    makeMove(i){
        this.board[i] = this.turn;
    }

}