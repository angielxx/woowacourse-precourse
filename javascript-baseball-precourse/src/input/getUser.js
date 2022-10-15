import checkValid from './checkValid.js';

export function getUser() {
  const userInput = document.getElementById('user-input')
  const userInputValue = userInput.value;

  if(checkValid(userInputValue)){
    return [...userInputValue]
  } else {
    alert('올바른 형태로 입력해주세요.')
    return false;
  }
}