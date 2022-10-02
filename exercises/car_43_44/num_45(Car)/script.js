// 45. Շատ շատ բարդ աստիճան։ Աջ կամ Ձախ սեղմելիս
// ավտոմեքենան սկսի պտույտ կատարել համապատասխան
// ուղղությում, իսկ առաջ կամ հետ սեղմելիս այդ թեքման
//  անկյունով առաջ կամ հետ գնա

const car = document.querySelector(".car");
const speed = 10;
const angleChange = 5;

let numOfHitsRight = 0;
let numOfHitsLeft = 0;

window.addEventListener("load", () => {
  car.style.position = "absolute";
  car.style.top = 0;
  car.style.left = 0;
});

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowRight":
      if (numOfHitsRight === 360 / angleChange - 1) {
        numOfHitsRight = 0;
      } else {
        numOfHitsRight++;
      }

      car.style.transform = `rotate(${numOfHitsRight * angleChange}deg)`;
      numOfHitsLeft = numOfHitsRight;
      break;

    case "ArrowLeft":
      if (numOfHitsLeft === 360 / angleChange - 1) {
        numOfHitsLeft = 0;
      } else {
        numOfHitsLeft--;
      }

      car.style.transform = `rotate(${numOfHitsLeft * angleChange}deg)`;
      numOfHitsRight = numOfHitsLeft;
      break;
  }
});










// window.addEventListener("keydown", (event) => {
//   switch (event.key) {
//     case "ArrowLeft":
//       car.style.transform = `rotate(${leftDegree})`;
//       car.style.left = parseInt(car.style.left) - speed + "px";
//       break;
//     case "ArrowRight":
//       car.style.transform = `rotate(${rightDegree})`;
//       car.style.left = parseInt(car.style.left) + speed + "px";
//       break;
//     case "ArrowUp":
//       car.style.transform = `rotate(${upDegree})`;
//       car.style.top = parseInt(car.style.top) - speed + "px";
//       break;
//     case "ArrowDown":
//       car.style.transform = `rotate(${downDegree})`;
//       car.style.top = parseInt(car.style.top) + speed + "px";
//       break;
//   }
// });




// car.style.transform = `rotate(${leftDegree})`;
// car.style.left = parseInt(car.style.left) - speed + "px";
