import Game from "./Game.js"

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const game = new Game();
const tiles = document.querySelectorAll(".board-tile")
const playerx = document.querySelector(".player-x")
const playero = document.querySelector(".player-o")

let buttonClicke = document.querySelector(".button")
buttonClicke.addEventListener("click", () =>{
    resetBoard();
})

tiles.forEach(tile => {
    tile.addEventListener("click", () =>{
        updateBoard(tile);
    })
})

function updateBoard(tile){
    game.makeMove(tile.id)
    document.getElementById(`${tile.id}`).textContent = game.turn;
    checkWinner();
    game.changeTurn()
    showTurn();
}

function checkWinner(){
    console.log("inside checkWinner!!")
    winPatterns.forEach(winPattern =>{
        if(game.board[winPattern[0]] != null && game.board[winPattern[1]] != null && game.board[winPattern[2]] != null){
            if(game.board[winPattern[0]] === game.board[winPattern[1]] && game.board[winPattern[1]] === game.board[winPattern[2]]){
                winPattern.forEach(index =>{
                    document.getElementById(`${index}`).setAttribute("style","color: red;background: lightpink;");
                })
            }
        }
    })
}

function resetBoard(){
    game.board.fill(null);
    for(let i = 0; i < 9; i++){
        document.getElementById(`${i}`).textContent = null;
        document.getElementById(`${i}`).setAttribute("style","color: black;");
    }
    game.turn = "X"; // reset turn
    showTurn();
}

function showTurn(){
    if(game.turn === "X"){
        playerx.setAttribute("style", "border-bottom: 3px solid pink;")
        playero.setAttribute("style", "border-bottom: none;")
    }else{
        playerx.setAttribute("style", "border-bottom: none;")
        playero.setAttribute("style", "border-bottom: 3px solid pink;")
    }
}