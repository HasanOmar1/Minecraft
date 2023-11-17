// const game = document.querySelector('.game')
const cells = 30 // 1500 / 50 = 30



let blocks = document.querySelector('.blocks')
function drawGame(){
for(let i = 0 ; i < 108 ; i++){
    createSky()
}
for(let i = 0 ; i < 10 ; i++){
    createCloud()
}
for(let i = 0 ; i < 27 ; i++){
    createSky()
}
for(let i = 0 ; i < 8 ; i++){
    createCloud()
}
for(let i = 0 ; i < 123 ; i++){
    createSky()
}
for(let i = 0 ; i < 3 ; i++){
    createTree()
}
for(let i = 0 ; i < 18 ; i++){
    createSky()
}
for(let i = 0 ; i < 3 ; i++){
    createTree()
}
for(let i = 0 ; i < 10 ; i++){
    createSky()
}
for(let i = 0 ; i < 3 ; i++){
    createTree()
}
for(let i = 0 ; i < 18 ; i++){
    createSky()
}
for(let i = 0 ; i < 3 ; i++){
    createTree()
}
for(let i = 0 ; i < 11 ; i++){
    createSky()
}
for(let i = 0 ; i < 1 ; i++){
    createLog()
}
for(let i = 0 ; i < 20 ; i++){
    createSky()
}
for(let i = 0 ; i < 1 ; i++){
    createLog()
}
for(let i = 0 ; i < 12 ; i++){
    createSky()
}
for(let i = 0 ; i < 1 ; i++){
    createLog()
}
for(let i = 0 ; i < 20 ; i++){
    createSky()
}
for(let i = 0 ; i < 1 ; i++){
    createLog()
}
for(let i = 0 ; i < 7 ; i++){
    createSky()
}
for(let i = 0 ; i < 34 ; i++){
    createGrass()
}
for(let i = 0 ; i < 1 ; i++){
    createDirt()
}
for(let i = 0 ; i < 3 ; i++){
    createStone()
}
for(let i = 0 ; i < 6 ; i++){
    createDirt()
}
for(let i = 0 ; i < 2 ; i++){
    createStone()
}
for(let i = 0 ; i < 8 ; i++){
    createDirt()
}
for(let i = 0 ; i < 1 ; i++){
    createStone()
}
for(let i = 0 ; i < 12 ; i++){
    createDirt()
}
for(let i = 0 ; i < 1 ; i++){
    createStone()
}
for(let i = 0 ; i < 12 ; i++){
    createDirt()
}
for(let i = 0 ; i < 1 ; i++){
    createStone()
}
for(let i = 0 ; i < 12 ; i++){
    createDirt()
}
for(let i = 0 ; i < 5 ; i++){
    createStone()
}
for(let i = 0 ; i < 6 ; i++){
    createDirt()
}
for(let i = 0 ; i < 2 ; i++){
    createStone()
}
for(let i = 0 ; i < 4 ; i++){
    createDirt()
}
for(let i = 0 ; i < 2 ; i++){
    createStone()
}
for(let i = 0 ; i < 6 ; i++){
    createDirt()
}
for(let i = 0 ; i < 3 ; i++){
    createStone()
}
for(let i = 0 ; i < 46 ; i++){
    createDirt()
}
for(let i = 0 ; i < 6 ; i++){
    createStone()
}
for(let i = 0 ; i < 21 ; i++){
    createDirt()
}
for(let i = 0 ; i < 1 ; i++){
    createStone()
}
for(let i = 0 ; i < 9 ; i++){
    createDirt()
}
}
function createSky(){
    let sky = document.createElement('div')
    blocks.appendChild(sky)
    sky.classList.add('box')
}

function createCloud(){
    let cloud = document.createElement('div')
    blocks.appendChild(cloud)
    cloud.classList.add('cloud')
}

function createTree(){
    let tree = document.createElement('div')
    blocks.appendChild(tree)
    tree.classList.add('tree')
}

function createLog(){
    let log = document.createElement('div')
    blocks.appendChild(log)
    log.classList.add('log')
}

function createGrass(){
    let grass = document.createElement('div')
    blocks.appendChild(grass)
    grass.classList.add('grass')
}

function createDirt(){
    let dirt = document.createElement('div')
    blocks.appendChild(dirt)
    dirt.classList.add('dirt')
}

function createStone(){
    let stone = document.createElement('div')
    blocks.appendChild(stone)
    stone.classList.add('stone')
}

drawGame()