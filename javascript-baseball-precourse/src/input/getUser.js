import checkValid from './checkValid.js';

export function getUser(userInputValue) {
  let userArr = [...userInputValue];
  userArr = userArr.map(Number);
  console.log(userArr)
  if(checkValid(userArr)){
    console.log('userOK')
    return userArr
  } else {
    console.log('userNotOK')
    alert('올바른 형태로 입력해주세요.')
    return false;
  }
}