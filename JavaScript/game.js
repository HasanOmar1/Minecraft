 
import  * as draw  from "./Draw.js"


const backgroundMusic = new Audio('/audio/very-nice-song.mp4')
backgroundMusic.play()
backgroundMusic.volume = 0.08
backgroundMusic.loop = true;
// play game
function game(){
draw.drawGame()
}
game()



// reset game
const resetBtn = document.querySelector('#reset-game')
resetBtn.addEventListener('click' , () => {
    localStorage.clear()
    window.location = window.location
})

