const player = document.getElementById("player");
let positionX = 50; // Posición inicial del jugador
let velocityX = 0; // Velocidad horizontal

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    velocityX = -5; // Mover hacia la izquierda
  } else if (event.code === "ArrowRight") {
    velocityX = 5; // Mover hacia la derecha
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
    velocityX = 0; // Detener movimiento al soltar la tecla
  }
});

function gameLoop() {
  // Actualizar la posición del jugador
  positionX += velocityX;

  // Evitar que el jugador salga del contenedor del juego
  if (positionX < 0) positionX = 0;
  if (positionX > 750) positionX = 750; // Restar el ancho del jugador para limitar el borde

  // Actualizar la posición del jugador en el DOM
  player.style.left = positionX + "px";

  requestAnimationFrame(gameLoop);
}

gameLoop();
