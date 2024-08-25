const body = document.querySelector("body");
const img = document.querySelector(".img");
const button = document.querySelector(".button");
const count = document.querySelector(".count");
const imgCount = document.querySelector(".roll-box__img");
const rollBoxess = document.querySelector(".roll-boxess");

let countNumber = 0;
let randomNumberCount = 0;

function rollDice() {
  const randomNumber = Math.ceil(Math.random() * 6);
  img.src = `./Images/dice${randomNumber}.webp`;
  countNumber += 1;
  randomNumberCount += randomNumber;
  console.log(randomNumberCount);

  //   count.textContent = countNumber;

  if (countNumber == 6) {
    rollBoxess.innerHTML = " ";
    countNumber = 0;
  } else {
    rollBoxess.innerHTML += `<li class="roll-box">
        <p class="roll-box__title">
          Roll
          <span class="roll-box__count count">${countNumber}</span>
        </p>
        <img
          src="./Images/dice${randomNumber}.webp"
          alt=""
          width="50"
          height="50"
          class="roll-box__img img"
        />
      </li>`;
  }
}

button.addEventListener("click", (e) => {
  rollDice();
});
