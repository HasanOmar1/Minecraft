 
// Drawing the Game

let blocks = document.querySelector('.blocks')

export function drawGame(){

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

export function createSky(){
    let sky = document.createElement('div')
    blocks.appendChild(sky)
    sky.classList.add('sky')
}

export function createCloud(){
    let cloud = document.createElement('div')
    blocks.appendChild(cloud)
    cloud.classList.add('cloud')
}

export function createTree(){
    let tree = document.createElement('div')
    blocks.appendChild(tree)
    tree.classList.add('tree')
}

export function createLog(){
    let log = document.createElement('div')
    blocks.appendChild(log)
    log.classList.add('log')
}

export function createGrass(){
    let grass = document.createElement('div')
    blocks.appendChild(grass)
    grass.classList.add('grass')
}

export function createDirt(){
    let dirt = document.createElement('div')
    blocks.appendChild(dirt)
    dirt.classList.add('dirt')
}

export function createStone(){
    let stone = document.createElement('div')
    blocks.appendChild(stone)
    stone.classList.add('stone')
}

