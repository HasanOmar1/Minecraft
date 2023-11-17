 
import  * as draw  from "./Draw.js"

// reset game
const resetBtn = document.querySelector('#reset-game')
resetBtn.addEventListener('click' , () => {
    window.location = window.location
})
    
function game(){
    draw.drawGame()
}
game()

