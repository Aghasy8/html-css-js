//44. 43-րդ խնդրում ավելացնել այն, որ ավտոմեքենայի շարժման ուղղություն փոխվելիս,
// համապատասխանաբար փոխվի նաև մեքենայի ուղղությունը


const car = document.querySelector(".car");
const speed = 10;
const leftDegree = "0deg";
const rightDegree = "180deg";
const upDegree = "90deg";
const downDegree = "-90deg";

// car.style.transform = `rotate(${degree})`;

window.addEventListener("load", () => {
  car.style.position = "absolute";
  car.style.top = 0;
  car.style.left = 0;
});

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      car.style.transform = `rotate(${leftDegree})`;
      car.style.left = parseInt(car.style.left) - speed + "px";
      break;
    case "ArrowRight":
      car.style.transform = `rotate(${rightDegree})`;
      car.style.left = parseInt(car.style.left) + speed + "px";
      break;
    case "ArrowUp":
      car.style.transform = `rotate(${upDegree})`;
      car.style.top = parseInt(car.style.top) - speed + "px";
      break;
    case "ArrowDown":
      car.style.transform = `rotate(${downDegree})`;
      car.style.top = parseInt(car.style.top) + speed + "px";
      break;
  }
});
