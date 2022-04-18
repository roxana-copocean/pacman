const width = 28
const grid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')
let squares = []
let score = 0 

// 28*28 = 784
// 0 - pac-dots
// 1 - wall
// 2- ghost-lair
// 3-power-pellet
// 4-empty
const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,2,2,2,2,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 

]

// create board
function createBoard(){
  // we create 784 divs using a for loop for the lenght of the layout.
  // we save the divs into a variable
  // we append the divs to the grid(we put it into the div with the grid)
  // we create an empty array outside of the function so we canm use it
  // we push all the divs we just created into that empty array
  // we call the function so we can do all of this
   for(i=0; i<layout.length; i++){
    const square = document.createElement('div')
    grid.appendChild(square)
    squares.push(square)
    if(layout[i] === 0){
      squares[i].classList.add('pac-dot')
    }else if(layout[i] === 1){
      squares[i].classList.add('wall')
    }else if(layout[i]=== 3){
      squares[i].classList.add('power-pellet')
    }else if(layout[i] === 2){
      squares[i].classList.add('ghost-lair')
    }
    
  } 
  
}
createBoard()
// console.log(squares); 

// starting position of pacman
let pacmanCurrentIndex = 490
squares[pacmanCurrentIndex].classList.add('pacman')



// up key- 38
// left -37
// right -39
function control(e){
  squares[pacmanCurrentIndex].classList.remove('pacman')
//   if(e.keyCode === 40){
// }else if(e.keyCode === 38){

// }else if(e.keyCode === 37){

// }else if(e.keyCode === 39){

// }
switch(e.keyCode){
  case 40:
    if(
      !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair')&&
      !squares[pacmanCurrentIndex + width ].classList.contains('wall') &&
      pacmanCurrentIndex + width < width * width )
      pacmanCurrentIndex +=width

  break
  case 38:
if(
  !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair')&&
  !squares[pacmanCurrentIndex - width ].classList.contains('wall') &&
  pacmanCurrentIndex - width >=0)
  pacmanCurrentIndex -=width
  break
  case 37:
    if(
      !squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair')&&
      !squares[pacmanCurrentIndex -1 ].classList.contains('wall') &&
      pacmanCurrentIndex % width !== 0)pacmanCurrentIndex -=1
      if(pacmanCurrentIndex === 364 ){
        pacmanCurrentIndex = 391
      }

  break 
  case 39:
if(
  !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair')&&
  !squares[pacmanCurrentIndex + 1 ].classList.contains('wall') &&
  pacmanCurrentIndex % width < width - 1)pacmanCurrentIndex +=1
  if(pacmanCurrentIndex === 391){
    pacmanCurrentIndex = 364
  }
  break
 
}
squares[pacmanCurrentIndex].classList.add('pacman')
pacDotEaten()
powerPalletEaten()
checkFoGameOver()
checkForWin()
}
document.addEventListener('keyup', control)

function pacDotEaten(){
  if(squares[pacmanCurrentIndex].classList.contains('pac-dot')){
    squares[pacmanCurrentIndex].classList.remove('pac-dot')
    score ++
    scoreDisplay.innerHTML = score
  }
}







class Ghost {
  constructor(className, startIndex, speed){
this.className = className
this.startIndex = startIndex
this.speed = speed
this.currentIndex = startIndex
this.isScared = false
this.timerId = NaN
  }
}






function powerPalletEaten(){
  if(squares[pacmanCurrentIndex].classList.contains('power-pellet')){
    squares[pacmanCurrentIndex].classList.remove('power-pellet')
    score += 10
    ghosts.forEach(ghost => ghost.isScared = true)
    setTimeout(unscareGhosts, 10000)

  }

}







function unscareGhosts(){
  ghosts.forEach(ghost => ghost.isScared = false)
}

const ghosts = [
  new Ghost('blinky', 348, 250),
  new Ghost('pinky', 376, 400),
  new Ghost('bluey', 351,300),
  new Ghost('pufy', 379, 500)
]

// draw my ghosts onto my grid
ghosts.forEach(ghost => {
  squares[ghost.currentIndex].classList.add(ghost.className)
  squares[ghost.currentIndex].classList.add('ghost')
});
ghosts.forEach(ghost => moveGhost(ghost))








function moveGhost(ghost){
const directions = [-1, +1, -width, +width ]
let direction = directions[Math.floor(Math.random() * directions.length)]

ghost.timerId = setInterval(function(){
  if(
    !squares[ghost.currentIndex + direction].classList.contains('wall')&&
    !squares[ghost.currentIndex + direction].classList.contains('ghost')
    ){

      squares[ghost.currentIndex].classList.remove(ghost.className)
      squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
     ghost.currentIndex += direction
     squares[ghost.currentIndex].classList.add(ghost.className)
     squares[ghost.currentIndex].classList.add('ghost')
    } else direction = directions[Math.floor(Math.random() * directions.length)]

    if(ghost.isScared){
      squares[ghost.currentIndex].classList.add('scared-ghost')
    }
    if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pacman')){
       squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scareGhost')
       ghost.currentIndex = ghost.startIndex
       score += 100
       squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
    }
    checkFoGameOver()
}, ghost.speed)
} 


// check for game over
function checkFoGameOver(){
  if(
    squares[pacmanCurrentIndex].classList.contains('ghost') && 
  !squares[pacmanCurrentIndex].classList.contains('scared-ghost')){
ghosts.forEach(ghost => clearInterval(ghost.timerId))
document.removeEventListener('keyup', control)
scoreDisplay.innerHTML = "You LOOSE!"
  }
}

function checkForWin(){
  if(score === 270){
    ghosts.forEach(ghost => clearInterval(ghost.timerId))
    document.removeEventListener('keyup', control)
scoreDisplay.innerHTML = "You WON!"
  }
}