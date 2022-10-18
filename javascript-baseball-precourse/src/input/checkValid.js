export default function checkValid(userInput) {
    const userArr = [...userInput];
    
    let result = true;
    if (! checkLength(userArr)) {
        result = false;
    }
    if (! checkType(userArr)) {
        result = false;
    }
    if (! checkRedun(userArr)) {
        result = false;
    }
    if (! checkNumber(userArr)) {
        result = false;
    }
    if (result) {
        return userArr;
    } else {
        return false;
    }
}




// 길이 체크
function checkLength(userArr) {
    let result = true;
    if (userArr.length != 3) {
        result = false;
    }
    return result;
}

// 타입(숫자인지) 체크
function checkType(userArr) {
    let result = true;
    for (let i = 0; i < userArr.length; i++) {
        if (typeof(userArr[i]) != 'number') {
            result = false;
            break;
        }
    }
    return result;
}

// 1~9의 숫자인지 체크
function checkNumber(userArr) {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let result = true;
    for (let i = 0; i < userArr.length; i++) {
        if (! number.includes(userArr[i])) {
            result = false;
            break;
        }
    }
    return result;
}

// 중복체크
function checkRedun(userArr) {
    const userSet = new Set(userArr);
    const userSetArr = [...userSet];
    let result = true;
    if (userSetArr.length != 3) {
        result = false;
    };
    return result;
}