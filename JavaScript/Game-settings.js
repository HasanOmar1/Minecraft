
const blocks = document.querySelector('.blocks')

const drawMap = (blocksLength , callback) => {
    for(let i = 0 ;  i < blocksLength ; i++){
        callback()
    }
}

//this function hardcodes the game
export function playGame(){
    drawMap(108 , createSky)
    drawMap(10 , createCloud)
    drawMap(27 , createSky)
    drawMap(8 , createCloud)
    drawMap(123 , createSky)
    drawMap(3 , createTree)
    drawMap(18 , createSky)
    drawMap(3 , createTree)
    drawMap(10 , createSky)
    drawMap(3 , createTree)
    drawMap(18 , createSky)
    drawMap(3 , createTree)
    drawMap(11 , createSky)
    drawMap(1 , createLog)
    drawMap(20 , createSky)
    drawMap(1 , createLog)
    drawMap(12 , createSky)
    drawMap(1 , createLog)
    drawMap(20 , createSky)
    drawMap(1 , createLog)
    drawMap(7 , createSky)
    drawMap(34 , createGrass)
    drawMap(1 , createDirt)
    drawMap(3 , createStone)
    drawMap(6 , createDirt)
    drawMap(2 , createStone)
    drawMap(8 , createDirt)
    drawMap(1 , createStone)
    drawMap(12 , createDirt)
    drawMap(1 , createStone)
    drawMap(12 , createDirt)
    drawMap(1 , createStone)
    drawMap(12 , createDirt)
    drawMap(5 , createStone)
    drawMap(6 , createDirt)
    drawMap(2 , createStone)
    drawMap(4 , createDirt)
    drawMap(2 , createStone)
    drawMap(6 , createDirt)
    drawMap(3 , createStone)
    drawMap(46 , createDirt)
    drawMap(6 , createStone)
    drawMap(21 , createDirt)
    drawMap(1 , createStone)
    drawMap(9 , createDirt)

}

const shovel = document.querySelector('#shovel')
const axe = document.querySelector('#axe')
const pickAxe = document.querySelector('#pick-axe')
const inventory = document.querySelector('.inventory')

let currentTool;


 function createSky(){
    let sky = document.createElement('div')
    blocks.appendChild(sky)
    sky.classList.add('sky')
    inventory.addEventListener('click' , () => {
        
        sky.addEventListener('click' , e => {
            if(e.target.classList.contains("sky") && localStorage.getItem('element') !== null){
                e.target.className = localStorage.getItem('element')
                inventory.className = 'inventory'
                if(inventory.classList.item(1) === null){
                    inventory.style.border = "2px solid black"
                    }
                localStorage.removeItem('element')
            }
        })
    })

    sky.addEventListener('click' , () => {
        if(currentTool === axe && sky.classList.contains('tree')){
            localStorage.setItem('newElement' , sky.classList.item(0))
            sky.className = 'sky'
            inventory.className = 'inventory tree'
            if(inventory.classList.item(1) !== null){
                inventory.style.border = "2px solid blue"
            }
        }
    })
    sky.addEventListener('click' , () => {
        if(currentTool === axe && sky.classList.contains('log')){
            localStorage.setItem('newElement' , sky.classList.item(0))
            sky.className = 'sky'
            inventory.className = 'inventory log'
            if(inventory.classList.item(1) !== null){
                inventory.style.border = "2px solid blue"
            }
        }
    })
    sky.addEventListener('click' , () => {
        if(currentTool === shovel && sky.classList.contains('dirt')){
            localStorage.setItem('newElement' , sky.classList.item(0))
            sky.className = 'sky'
            inventory.className = 'inventory dirt'
            if(inventory.classList.item(1) !== null){
                inventory.style.border = "2px solid blue"
            }
        }
    })
    sky.addEventListener('click' , () => {
        if(currentTool === shovel && sky.classList.contains('grass')){
            localStorage.setItem('newElement' , sky.classList.item(0))
            sky.className = 'sky'
            inventory.className = 'inventory grass'
            if(inventory.classList.item(1) !== null){
                inventory.style.border = "2px solid blue"
            }
        }
    })
    sky.addEventListener('click' , () => {
        if(currentTool === pickAxe && sky.classList.contains('stone')){
            localStorage.setItem('newElement' , sky.classList.item(0))
            sky.className = 'sky'
            inventory.className = 'inventory stone'
            if(inventory.classList.item(1) !== null){
                inventory.style.border = "2px solid blue"
            }
        }
    })

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
                localStorage.removeItem('newElement')
                tree.replaceWith(sky)
                inventory.className = 'inventory tree'
                if(inventory.classList.item(1) !== null){
                    inventory.style.border = "2px solid blue"
                }                
                inventory.addEventListener('click' , () => {
                    sky.addEventListener('click' , e => {
                        if(e.target.classList.contains("sky") && localStorage.getItem('element') !== null ||
                        e.target.classList.contains("sky") && localStorage.getItem('newElement') !== null){
                            e.target.className = localStorage.getItem('element') || localStorage.getItem('newElement')
                            inventory.className = 'inventory'
                            if(inventory.classList.item(1) === null){
                                inventory.style.border = "2px solid black"
                                }
                            localStorage.clear()
                    }
                    
                    })
            })
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
                if(inventory.classList.item(1) !== null){
                    inventory.style.border = "2px solid blue"
                }
                inventory.addEventListener('click' , () => {
                    sky.addEventListener('click' , e => {
                        if(e.target.classList.contains("sky") && localStorage.getItem('element') !== null ||
                        e.target.classList.contains("sky") && localStorage.getItem('newElement') !== null){
                            e.target.className = localStorage.getItem('element') || localStorage.getItem('newElement')
                            inventory.className = 'inventory'
                            if(inventory.classList.item(1) === null){
                                inventory.style.border = "2px solid black"
                                }
                            localStorage.clear()
                    }
                    
                    })
            })
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
                if(inventory.classList.item(1) !== null){
                    inventory.style.border = "2px solid blue"
                }
                inventory.addEventListener('click' , () => {
                    sky.addEventListener('click' , e => {
                        if(e.target.classList.contains("sky") && localStorage.getItem('element') !== null ||
                        e.target.classList.contains("sky") && localStorage.getItem('newElement') !== null){
                            e.target.className = localStorage.getItem('element') || localStorage.getItem('newElement')
                            inventory.className = 'inventory'
                            if(inventory.classList.item(1) === null){
                                inventory.style.border = "2px solid black"
                                }
                            localStorage.clear()
                    }
                    
                    })
            })
                
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
                dirt.replaceWith(sky)
                inventory.className = 'inventory dirt'
                if(inventory.classList.item(1) !== null){
                    inventory.style.border = "2px solid blue"
                }
                inventory.addEventListener('click' , () => {
                    sky.addEventListener('click' , e => {
                        if(e.target.classList.contains("sky") && localStorage.getItem('element') !== null ||
                        e.target.classList.contains("sky") && localStorage.getItem('newElement') !== null){
                            e.target.className = localStorage.getItem('element') || localStorage.getItem('newElement')
                            inventory.className = 'inventory'
                            if(inventory.classList.item(1) === null){
                                inventory.style.border = "2px solid black"
                                }
                            localStorage.clear()
                    }
                    
                    })
            })
                
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
                if(inventory.classList.item(1) !== null){
                    inventory.style.border = "2px solid blue"
                }
                
                inventory.addEventListener('click' , () => {
                    sky.addEventListener('click' , e => {
                        if(e.target.classList.contains("sky") && localStorage.getItem('element') !== null ||
                        e.target.classList.contains("sky") && localStorage.getItem('newElement') !== null){
                            e.target.className = localStorage.getItem('element') || localStorage.getItem('newElement')
                            inventory.className = 'inventory'
                            if(inventory.classList.item(1) === null){
                                inventory.style.border = "2px solid black"
                                }
                            localStorage.clear()
                    }
                    
                    })
            })
                
            }
                })
        })
}

 function curTool(){

    if(currentTool === shovel){
        shovel.classList.add('current')
        document.body.classList.add('shovel-cursor')
    if(axe.classList.contains('current') || pickAxe.classList.contains('current') ||
        document.body.contains('axe-cursor') || document.body.contains('pickaxe-cursor')){
        axe.classList.remove('current')
        pickAxe.classList.remove('current')
        document.body.classList.remove('axe-cursor')
        document.body.classList.remove('pickaxe-cursor')
    }
    }
    
    if(currentTool === axe){
        axe.classList.add('current')
        document.body.classList.add('axe-cursor')
    if(shovel.classList.contains('current') || pickAxe.classList.contains('current') ||
        document.body.classList.contains('shovel-cursor') || document.body.classList.contains('pickaxe-cursor')){
        shovel.classList.remove('current')
        pickAxe.classList.remove('current')
        document.body.classList.remove('shovel-cursor')
        document.body.classList.remove('pickaxe-cursor')
    }
    }
    
    
    if(currentTool === pickAxe){
        pickAxe.classList.add('current')
        document.body.classList.add(`pickaxe-cursor`)
    if(axe.classList.contains('current') || shovel.classList.contains('current') ||
        document.body.classList.contains('axe-cursor') || document.body.classList.contains('shovel-cursor')){
        axe.classList.remove('current')
        shovel.classList.remove('current')
        document.body.classList.remove('axe-cursor')
        document.body.classList.remove('shovel-cursor')
    }
    }
}


