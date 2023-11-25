import { playGame } from "./Game-settings.js";

const backgroundMusic = new Audio("/audio/very-nice-song.mp4");
backgroundMusic.play();
backgroundMusic.volume = 0.03;
backgroundMusic.loop = true;
// play game
function game() {
  playGame();
}
game();

// reset game
const resetBtn = document.querySelector("#reset-game");
resetBtn.addEventListener("click", () => {
  localStorage.clear();
  window.location = window.location;
});
