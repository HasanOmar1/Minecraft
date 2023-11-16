const game = document.querySelector('.game')
const rowSize = 16
const colSize = 21

Array.from(game).forEach(v => v.addEventListener('click', function() {
    v.style.background = 'yellow';
  }));

// function createGame(){
// for(let i = 0 ; i < rowSize ; i++){
//     createRow()
//     for(let j = 0 ; j < rowSize[0] ; j++){
//         createCol()

//     }
// }
// }

// const createRow = () => {
//     const row = document.createElement("div");
//     game.appendChild(row)
//     row.classList.add(`row`)
// }

// const createCol = () => {
//     const col = document.createElement("div");
//     game.appendChild(col)
//     col.classList.add(`col`)
// }

// createGame()


//0 sky
//1 clouds
//2 grass
//3 dirt
//4 log
//5 tree

// let sky = document.createElement('div')
// let cloud = document.createElement('div')
// let grass = document.createElement('div')
// let dirt = document.createElement('div')
// let log = document.createElement('div')
// let tree = document.createElement('div')

// sky = 0
// cloud = 1 
// grass = 2
// dirt = 3
// log = 4
// tree = 5

// let map = [
//     [0 , 1 , 2 , 3 ]
//     [0 , 1 , 2 , 3 ]
// ]


