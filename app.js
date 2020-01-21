const diceContainer = document.querySelector("#dice-container");

// define class Die
class Die {
  constructor() {
    // create die div and setting styling and adding classes
    this.div = document.createElement("div");
    this.div.style.width = "60px";
    this.div.style.height = "60px";
    this.div.style.backgroundImage =
      "url('/img/blank-dice-png.png') no-repeat center center fixed";

    this.div.classList.add(
      "border",
      "shadow-sm",
      "p-3",
      "bg-white",
      "rounded",
      // "mr-auto",
      "mb-5",
      "col-md-3",
      "die"
    );

    // adding die div to DOM
    diceContainer.appendChild(this.div);

    // add event listener to created die
    this.div.addEventListener("dblclick", removeDie);
    this.div.addEventListener("click", rollOneDie);

    // calling roll method
    this.roll();
  }
  // roll method which create random die number and adding that number to div
  roll() {
    let dieNumber = Math.floor(Math.random() * 6) + 1;
    this.div.innerText = `${dieNumber}`;
    this.dieValue = dieNumber;
  }
}

const button = document.getElementById("add-new-die");
const reRoll = document.getElementById("re-roll");
const sumOfDice = document.getElementById("sum-dice");

button.addEventListener("click", insertNewDie);
reRoll.addEventListener("click", reRollDice);
sumOfDice.addEventListener("click", sumDice);

let dieCounter = 0;
let totalNumberOfDice = [];

// insert new die
function insertNewDie() {
  let die = new Die();
  totalNumberOfDice.push(die);
  console.log(totalNumberOfDice);
}

// roll the dice (create new values)
function reRollDice() {
  newDieValue = 0;
  newDie = document.querySelectorAll(".die");

  for (i = 0; i < totalNumberOfDice.length; i++) {
    newDieValue = Math.floor(Math.random() * 6) + 1;
    totalNumberOfDice[i].dieValue = newDieValue;
    newDie[i].innerText = newDieValue;
  }
}

// sum die values
function sumDice() {
  newDieValue = 0;
  sum = 0;
  for (i = 0; i < totalNumberOfDice.length; i++) {
    sum += totalNumberOfDice[i].dieValue;
  }
  alert(`Sum of dice values is: ${sum}`);
  console.log(sum);
}

// roll one die on click
function rollOneDie(e) {
  newDieValue = 0;
  newDie = document.querySelectorAll(".die");
  currentDieValue = e.target.innerText;
  for (i = 0; i < totalNumberOfDice.length; i++) {
    newDieValue = Math.floor(Math.random() * 6) + 1;
    if (totalNumberOfDice[i].dieValue === parseInt(currentDieValue)) {
      newDie[i].innerText = newDieValue;
      totalNumberOfDice[i].dieValue = newDieValue;
    }
  }
}

// remove die on double click
function removeDie(e) {
  let clickedElement = e.target.innerText;

  for (i = 0; i < totalNumberOfDice.length; i++) {
    if (totalNumberOfDice[i].dieValue === parseInt(clickedElement)) {
      totalNumberOfDice.splice(i, 1);
      e.target.remove();
    }
  }
  e.preventDefault();
}
