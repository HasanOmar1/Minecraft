 
import  * as draw  from "./Draw.js"

// reset game
const resetBtn = document.querySelector('#reset-game')
resetBtn.addEventListener('click' , () => {
    localStorage.clear()
    window.location = window.location
})
    
function game(){
    draw.drawGame()
}
game()

