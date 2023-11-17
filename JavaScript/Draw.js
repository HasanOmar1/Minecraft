 
// Drawing the Game

const blocks = document.querySelector('.blocks')

//this function hardcodes the game
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

const shovel = document.querySelector('#shovel')
const axe = document.querySelector('#axe')
const pickAxe = document.querySelector('#pick-axe')

let currentTool;

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

    let sky = document.createElement('div')
    sky.classList.add('sky')

    shovel.addEventListener('click' , () => {
        currentTool = shovel
        tree.addEventListener('click' , () => {
            if(currentTool === shovel && tree.classList.contains('tree')){
                tree.replaceWith(tree)
                
            }
        })
    })

        axe.addEventListener('click' , () => {
            currentTool = axe
            tree.addEventListener('click' , () => {
            if(currentTool === axe && tree.classList.contains('tree')){
                tree.replaceWith(sky)
            }
                })

        })

        pickAxe.addEventListener('click' , () => {
            currentTool = pickAxe
            tree.addEventListener('click' , () => {
            if(currentTool === pickAxe && tree.classList.contains('tree')){
                tree.replaceWith(tree)
            }
                })

        })


}

export function createLog(){
    let log = document.createElement('div')
    blocks.appendChild(log)
    log.classList.add('log')

    let sky = document.createElement('div')
    sky.classList.add('sky')

    shovel.addEventListener('click' , () => {
        currentTool = shovel
        log.addEventListener('click' , () => {
            if(currentTool === shovel && log.classList.contains('log')){
                log.replaceWith(log)
                
            }
        })
    })

        axe.addEventListener('click' , () => {
            currentTool = axe
            log.addEventListener('click' , () => {
            if(currentTool === axe && log.classList.contains('log')){
                log.replaceWith(sky)
            }
                })

        })

        pickAxe.addEventListener('click' , () => {
            currentTool = pickAxe
            log.addEventListener('click' , () => {
            if(currentTool === pickAxe && log.classList.contains('log')){
                log.replaceWith(log)
            }
                })

        })


}

export function createGrass(){
    let grass = document.createElement('div')
    blocks.appendChild(grass)
    grass.classList.add('grass')

    let sky = document.createElement('div')
    sky.classList.add('sky')

    shovel.addEventListener('click' , () => {
        currentTool = shovel
        grass.addEventListener('click' , () => {
            if(currentTool === shovel && grass.classList.contains('grass')){
                grass.replaceWith(sky)
                
            }
        })
    })

        axe.addEventListener('click' , () => {
            currentTool = axe
            grass.addEventListener('click' , () => {
            if(currentTool === axe && grass.classList.contains('grass')){
                grass.replaceWith(grass)
            }
                })

        })

        pickAxe.addEventListener('click' , () => {
            currentTool = pickAxe
            grass.addEventListener('click' , () => {
            if(currentTool === pickAxe && grass.classList.contains('grass')){
                grass.replaceWith(grass)
            }
                })

        })
    
    }


export function createDirt(){
    let dirt = document.createElement('div')
    blocks.appendChild(dirt)
    dirt.classList.add('dirt')

    let sky = document.createElement('div')
    sky.classList.add('sky')

    shovel.addEventListener('click' , () => {
        currentTool = shovel
        dirt.addEventListener('click' , () => {
            if(currentTool === shovel && dirt.classList.contains('dirt')){
                dirt.replaceWith(sky)
                
            }
        })
    })

        axe.addEventListener('click' , () => {
            currentTool = axe
            dirt.addEventListener('click' , () => {
            if(currentTool === axe && dirt.classList.contains('dirt')){
                dirt.replaceWith(dirt)
            }
                })

        })

        pickAxe.addEventListener('click' , () => {
            currentTool = pickAxe
            dirt.addEventListener('click' , () => {
            if(currentTool === pickAxe && dirt.classList.contains('dirt')){
                dirt.replaceWith(dirt)
            }
                })

        })
  
}



export function createStone(){
    let stone = document.createElement('div')
    blocks.appendChild(stone)
    stone.classList.add('stone')

    let sky = document.createElement('div')
    sky.classList.add('sky')

    shovel.addEventListener('click' , () => {
        currentTool = shovel
        stone.addEventListener('click' , () => {
            if(currentTool === shovel && stone.classList.contains('stone')){
                stone.replaceWith(stone)
                
            }
        })
    })

        axe.addEventListener('click' , () => {
            currentTool = axe
            stone.addEventListener('click' , () => {
            if(currentTool === axe && stone.classList.contains('stone')){
                stone.replaceWith(stone)
            }
                })

        })

        pickAxe.addEventListener('click' , () => {
            currentTool = pickAxe
            stone.addEventListener('click' , () => {
            if(currentTool === pickAxe && stone.classList.contains('stone')){
                stone.replaceWith(sky)
            }
                })

        })
}
