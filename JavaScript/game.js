 
import  * as draw  from "./Draw.js"

function game(){
    draw.drawGame()
}
game()


const resetBtn = document.querySelector('#reset-game')

resetBtn.addEventListener('click' , () => {
    window.location = window.location
})