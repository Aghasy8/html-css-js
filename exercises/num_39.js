//Այս զանգվածից ստանալ նոր զանգված, որը
//կունենա red գույն ունեցող էլեմենտների flavor-ները
//պարունակող array ([‘strawberry’, ‘watermelon’]),
//անպայման օգտագործել reduce

const iceCreams = [
  { flavor: "pineapple", color: "white" },
  { flavor: "strawberry", color: "red" },
  { flavor: "watermelon", color: "red" },
  { flavor: "kiwi", color: "green" },
  { flavor: "mango", color: "yellow" },
  { flavor: "pear", color: "green" },
];

const redIceCreams = iceCreams.filter((item) => item.color === "red");

// const redIceCreams = iceCreams.filter((item) => {
//   return item.color === "red";
// });

let initialValue = [];

const redFlavors = redIceCreams.reduce((previousArray, currentObject) => {
  return (previousArray = [...previousArray, currentObject.flavor]);
}, initialValue);

console.log(redFlavors);
