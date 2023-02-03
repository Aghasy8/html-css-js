const gridItems = document.querySelectorAll(".items");
const button = document.querySelector("button");
let gameResult = document.querySelector(".gameResult");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
const gridItemsArray = [one, two, three, four, five, six, seven, eight, nine];
const x = "x";
const o = "o";
let player = x;
let allBoxesOccupied = false;
const eventListenerFunc = (event) => {
  event.target.innerText = player;
  allBoxesOccupied = gridItemsArray.every((box) => box.innerText !== "");
  player === x ? (player = o) : (player = x);
  event.target.removeEventListener("click", eventListenerFunc);
  if (
    (one.innerHTML &&
      two.innerHTML &&
      three.innerHTML &&
      one.innerHTML === two.innerHTML &&
      two.innerHTML === three.innerHTML) ||
    (one.innerHTML &&
      four.innerHTML &&
      seven.innerHTML &&
      one.innerHTML === four.innerHTML &&
      four.innerHTML === seven.innerHTML) ||
    (one.innerHTML &&
      five.innerHTML &&
      nine.innerHTML &&
      one.innerHTML === five.innerHTML &&
      five.innerHTML === nine.innerHTML) ||
    (seven.innerHTML &&
      eight.innerHTML &&
      nine.innerHTML &&
      seven.innerHTML === eight.innerHTML &&
      eight.innerHTML === nine.innerHTML) ||
    (three.innerHTML &&
      six.innerHTML &&
      nine.innerHTML &&
      three.innerHTML === six.innerHTML &&
      six.innerHTML === nine.innerHTML) ||
    (four.innerHTML &&
      five.innerHTML &&
      six.innerHTML &&
      four.innerHTML === five.innerHTML &&
      six.innerHTML === five.innerHTML) ||
    (two.innerHTML &&
      five.innerHTML &&
      eight.innerHTML &&
      two.innerHTML === five.innerHTML &&
      five.innerHTML === eight.innerHTML) ||
    (three.innerHTML &&
      five.innerHTML &&
      seven.innerHTML &&
      three.innerHTML === five.innerHTML &&
      five.innerHTML === seven.innerHTML)
  ) {
    const winMessage = "player congrats!! you won";
    switch (player) {
      case "x":
        gameResult.innerText = `O ${winMessage}`;

        break;

      case "o":
        gameResult.innerText = `X ${winMessage}`;

        break;
    }
  } else if (allBoxesOccupied) {
    gameResult.innerText = "This Is A Draw!! Start again!";
  }

  if (gameResult.innerText) {
    gridItemsArray.map((item) => {
      item.removeEventListener("click", eventListenerFunc);
      return;
    });
  }
};

gridItemsArray.map((item) => {
  item.addEventListener("click", eventListenerFunc);
});

button.addEventListener("click", () => {
  gridItemsArray.map((item) => {
    item.innerText = "";
  });
  player = "x";
  gameResult.innerText = "";
  gridItemsArray.map((item) => {
    item.addEventListener("click", eventListenerFunc);
  });
});
