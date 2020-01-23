// create class
class Die {
  constructor(div, value) {
    this.value = value;
    this.div = div;
  }

  // create call method. during instatiating adding event listeners for double and signle click.
  roll() {
    this.div = document.createElement("div");
    this.value = this.randNum();
    this.div.innerText = this.value;
    this.div.id = "square";
    this.div.classList.add(
      "shadow",
      "text-secondary",
      "d-flex",
      "align-items-center",
      "die",
      "justify-content-center"
    );
    diceContainer.appendChild(this.div);

    // add event listener for single click
    this.div.addEventListener("click", () => {
      this.reroll();
    });

    // add event listener for double click
    this.div.addEventListener("dblclick", () => {
      allDie.splice(allDie.indexOf(this), 1);
      this.div.remove();
    });
  }
  // method for creating random number between 1 and 6
  randNum() {
    return Math.floor(Math.random() * 6) + 1;
  }
  // method for updateing die values when buttun is clicked
  reroll() {
    this.value = this.randNum();
    this.div.innerText = this.value;
  }
}

let allDie = [];

const diceContainer = document.getElementById("dice-container");
const addDieBtn = document.getElementById("add-new-die");
const rerollBtn = document.getElementById("re-roll");
const sumBtn = document.getElementById("sum-dice");

addDieBtn.addEventListener("click", function() {
  const die = new Die();
  const value = die.roll();
  allDie.push(die);
});

rerollBtn.addEventListener("click", function() {
  for (let i = 0; i < allDie.length; i++) {
    allDie[i].reroll();
  }
});

sumBtn.addEventListener("click", function() {
  let sumDieValue = 0;
  for (let i = 0; i < allDie.length; i++) {
    sumDieValue += allDie[i].value;
  }
  alert(`Dice sum is: ${sumDieValue}.`);
});
