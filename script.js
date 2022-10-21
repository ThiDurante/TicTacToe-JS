const squares = document.getElementsByClassName('square')
console.log(squares)

let player = document.querySelector('.player')

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', () => {
    console.log(i);
  })
}

