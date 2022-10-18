import getUser from "./input/getUser.js";

function racingGame() {
  const carNamesForm = document.getElementById('car-names-form');
  const carNamesInput = document.getElementById('car-names-input');

  carNamesForm.addEventListener('submit', () => {
    const userStr = carNamesInput.value;
    console.log(userStr)
  });
  const carArr = getUser();
}

function Car(name) {
  this.name = name;
}

new Car("name");

new racingGame();