import checkValid from './checkValid.js';

export default function getUser(userInputValue) {
  let userArr = [...userInputValue];
  userArr = userArr.map(Number);
  console.log('user :', userArr)

  if(checkValid(userArr)){
    return userArr;
  } else {
    alert('올바른 형태로 입력해주세요.');
    return false;
  }
}