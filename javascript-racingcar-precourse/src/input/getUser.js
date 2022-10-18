export default function getUser(userStr) {
  const userArr = userStr.split('')
  console.log(userArr)
  if (checkValid(userArr)) {
    return 
  } else {
    alert('no!')
  }
}

function getCarName(userArr) {
  
}