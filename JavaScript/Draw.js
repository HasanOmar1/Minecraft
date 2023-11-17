 
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
const inventory = document.querySelector('.inventory')

let currentTool;


function newElement(element){
    let inventoryItem = document.createElement('div')
    let item = inventory.classList.item(1)
    if(item !== null){
        inventory.addEventListener('click' , () => {
            let currentElement = localStorage.getItem('element')
            inventoryItem.classList.add(currentElement)
            console.log(inventoryItem)

            element.addEventListener('click', () => {
                element.replaceWith(inventoryItem)
                let remove = inventory.classList.item(1)
                inventory.classList.remove(remove)
                inventoryItem.className = currentElement
                // console.log(inventoryItem)
            })
            });
        }

    }

 function createSky(){
    let sky = document.createElement('div')
    blocks.appendChild(sky)
    sky.classList.add('sky')
    // newElement(sky)

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

    let sky = document.createElement('div')
    sky.classList.add('sky')
    shovel.addEventListener('click' , () => {
        currentTool = shovel
        curTool()
        tree.addEventListener('click' , () => {
            if(currentTool === shovel && tree.classList.contains('tree')){
                tree.replaceWith(tree)
                
            }
        })
    })

        axe.addEventListener('click' , () => {
            currentTool = axe
            curTool()
            tree.addEventListener('click' , () => {
            if(currentTool === axe && tree.classList.contains('tree')){
                localStorage.setItem('element' , tree.classList)
                tree.replaceWith(sky)
                inventory.className = 'inventory tree'
                // newElement(sky)
            }
                })

        })

        pickAxe.addEventListener('click' , () => {
            currentTool = pickAxe
            curTool()
            tree.addEventListener('click' , () => {
            if(currentTool === pickAxe && tree.classList.contains('tree')){
                tree.replaceWith(tree)
            }
                })

        })


}

 function createLog(){
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
                localStorage.setItem('element' , log.classList)
                log.replaceWith(sky)
                inventory.className = 'inventory log'
                // newElement(sky)
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

 function createGrass(){
    let grass = document.createElement('div')
    blocks.appendChild(grass)
    grass.classList.add('grass')

    let sky = document.createElement('div')
    sky.classList.add('sky')

    shovel.addEventListener('click' , () => {
        currentTool = shovel
        grass.addEventListener('click' , () => {
            if(currentTool === shovel && grass.classList.contains('grass')){
                localStorage.setItem('element' , grass.classList)
                grass.replaceWith(sky)
                inventory.className = 'inventory grass'
                // newElement(sky)
                
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


 function createDirt(){
    let dirt = document.createElement('div')
    blocks.appendChild(dirt)
    dirt.classList.add('dirt')

    let sky = document.createElement('div')
    sky.classList.add('sky')

    shovel.addEventListener('click' , () => {
        currentTool = shovel
        dirt.addEventListener('click' , () => {
            if(currentTool === shovel && dirt.classList.contains('dirt')){
                localStorage.setItem('element' , dirt.classList)
                // let currentElement = localStorage.getItem('element')
                dirt.replaceWith(sky)
                inventory.className = 'inventory dirt'
                newElement(sky)
                
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



 function createStone(){
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
                localStorage.setItem('element' , stone.classList)
                stone.replaceWith(sky)
                inventory.className = 'inventory stone'
                // newElement(sky)
                
            }
                })

        })
}

// inventory.addEventListener('click' , () => {
//     let item = inventory.classList.item(1)
//     stone.addEventListener('click', () => {
//         stone.replaceWith(item)
//     })
// })
// inventory.addEventListener('click' , () => {
//     let item = inventory.classList.item(1)
//     dirt.addEventListener('click', () => {
//         dirt.replaceWith(item)
//     })
// })
// inventory.addEventListener('click' , () => {
//     let item = inventory.classList.item(1)
//     grass.addEventListener('click', () => {
//         grass.replaceWith(item)
//     })
// })
// inventory.addEventListener('click' , () => {
//     let item = inventory.classList.item(1)
//     log.addEventListener('click', () => {
//         log.replaceWith(item)
//     })
// })
// inventory.addEventListener('click' , () => {
//     let item = inventory.classList.item(1)
//     tree.addEventListener('click', () => {
//         tree.replaceWith(item)
//     })
// })
// inventory.addEventListener('click' , () => {
//     let item = inventory.classList.item(1)
//    sky.addEventListener('click', () => {
//        sky.replaceWith(item)
//     })
// })



    



 function curTool(){

    if(currentTool === shovel){
        shovel.classList.add('current')
    if(axe.classList.contains('current') || pickAxe.classList.contains('current') ){
        axe.classList.remove('current')
        pickAxe.classList.remove('current')
    }
    }
    
    if(currentTool === axe){
        axe.classList.add('current')
    if(shovel.classList.contains('current') || pickAxe.classList.contains('current') ){
        shovel.classList.remove('current')
        pickAxe.classList.remove('current')
    }
    }
    
    
    if(currentTool === pickAxe){
        pickAxe.classList.add('current')
    if(axe.classList.contains('current') || shovel.classList.contains('current') ){
        axe.classList.remove('current')
        shovel.classList.remove('current')
    }
    }
}


