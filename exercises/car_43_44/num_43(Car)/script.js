const car = document.querySelector(".car");
const speed = 10;

window.addEventListener("load", () => {
  car.style.position = "absolute";
  car.style.top = 0;
  car.style.left = 0;
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      car.style.left = parseInt(car.style.left) - speed + "px";
      break;
    case "ArrowRight":
      car.style.left = parseInt(car.style.left) + speed + "px";
      break;
    case "ArrowUp":
      car.style.top = parseInt(car.style.top) - speed + "px";
      break;
    case "ArrowDown":
      car.style.top = parseInt(car.style.top) + speed + "px";
      break;
  }
});
