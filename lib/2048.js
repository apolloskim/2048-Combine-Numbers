import Game from './game.js';


document.addEventListener("DOMContentLoaded", () => {
  let game = new Game();
  game.setup();
  game.play();
});
