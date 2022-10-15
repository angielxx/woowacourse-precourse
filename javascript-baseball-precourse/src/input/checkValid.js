export default function checkValid(userInput) {
    const userSet = new Set(userInput);
    const userArr = [...userSet];
    if (userArr.length != 3) {
        return false;
    }
    return true;
}