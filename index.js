// let bonusPoints = 50
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints -75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)
let countEl = document.getElementById("count-el");
console.log(countEl);
let saveEl = document.getElementById("save-el");
console.log(saveEl);
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;

  console.log(count);
}
function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  console.log(count);
  countEl.textContent = 0;
  count = 0;
}

let welcomeEL = document.getElementById("welcome-el");

let name = "Ali";
let greeting = "Welcome Back ";
welcomeEL.innerText = greeting + name;
welcomeEL.innerText += "";
