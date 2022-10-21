const squares = document.getElementsByClassName('square');
const resetBtn = document.querySelector('.reset')
console.log(squares);

let player = document.querySelector('.player');

const gameOver = () => {
  const winCondition1 =
    squares[0].innerText === squares[1].innerText &&
    squares[0].innerText === squares[2].innerText &&
    squares[0].innerText !== '' &&
    squares[1].innerText !== '' &&
    squares[2].innerText !== '';

  const winCondition2 =
    squares[3].innerText === squares[4].innerText &&
    squares[3].innerText === squares[5].innerText &&
    squares[3].innerText !== '' &&
    squares[4].innerText !== '' &&
    squares[5].innerText !== '';

  const winCondition3 =
    squares[6].innerText === squares[7].innerText &&
    squares[6].innerText === squares[8].innerText &&
    squares[6].innerText !== '' &&
    squares[7].innerText !== '' &&
    squares[8].innerText !== '';

  const winCondition4 =
    squares[0].innerText === squares[4].innerText &&
    squares[0].innerText === squares[8].innerText &&
    squares[0].innerText !== '' &&
    squares[4].innerText !== '' &&
    squares[8].innerText !== '';

  const winCondition5 =
    squares[2].innerText === squares[4].innerText &&
    squares[2].innerText === squares[6].innerText &&
    squares[2].innerText !== '' &&
    squares[4].innerText !== '' &&
    squares[6].innerText !== '';

  const winCondition6 =
    squares[0].innerText === squares[3].innerText &&
    squares[0].innerText === squares[6].innerText &&
    squares[0].innerText !== '' &&
    squares[3].innerText !== '' &&
    squares[6].innerText !== '';

  const winCondition7 =
    squares[1].innerText === squares[4].innerText &&
    squares[1].innerText === squares[7].innerText &&
    squares[1].innerText !== '' &&
    squares[4].innerText !== '' &&
    squares[7].innerText !== '';

  const winCondition8 =
    squares[2].innerText === squares[5].innerText &&
    squares[2].innerText === squares[8].innerText &&
    squares[2].innerText !== '' &&
    squares[5].innerText !== '' &&
    squares[8].innerText !== '';

  const winConditions =
    winCondition1 ||
    winCondition2 ||
    winCondition3 ||
    winCondition4 ||
    winCondition5 ||
    winCondition6 ||
    winCondition7 ||
    winCondition8;

  return winConditions;
};

//setting event listeners for all the game squares
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', () => {
    const player = document.querySelector('.player');
    player.innerHTML === 'Player 1'
      ? (player.innerHTML = 'Player 2')
      : (player.innerHTML = 'Player 1');

    if (player.innerHTML === 'Player 1') {
      squares[i].innerHTML = 'X';
      squares[i].classList.add('X')
    } else {
      squares[i].innerHTML = 'O';
      squares[i].classList.add('O')

    }

    if (gameOver()){
      window.alert(`${player.innerHTML} won!!`)
    }
  });
}

//reseting the board
resetBtn.addEventListener('click', () => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = ''
  }
})
