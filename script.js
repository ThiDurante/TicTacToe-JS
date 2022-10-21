const squares = document.getElementsByClassName('square')
console.log(squares)

let player = document.querySelector('.player')

//setting event listeners for all the game squares
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', () => {
    const player = document.querySelector('.player')
    player.innerHTML === 'Player 1' 
    ? player.innerHTML = 'Player 2' : player.innerHTML = 'Player 1'

    if(player.innerHTML === 'Player 1') {
      squares[i].innerHTML = 'X'
    } else {
      squares[i].innerHTML = 'O'
    }
  })
}

