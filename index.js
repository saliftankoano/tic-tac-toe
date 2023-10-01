/*----- constants -----*/
const messages = document.querySelector('h2');

/*----- app's state (variables) -----*/
let board;
let turn = 'X';
/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
/*----- functions -----*/
function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
};
init();
render();
function render() {
    board.forEach(function(mark, index){
        squares[index].textContent = mark;
    });
    messages.textContent = `It's ${turn}'s turn!`;
};
function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
    return square === event.target;
    });
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    // check your console logs to make sure it's working!
    console.log(board);
};