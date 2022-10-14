import checkValid from "./checkValid.js";

const userForm = document.getElementById('user-form')
const userInput = document.getElementById('user-input')

function getUserInput(event) {
  event.preventDefault();
  console.log(typeof userInput.value)
}

userForm.addEventListener('submit', getUserInput)