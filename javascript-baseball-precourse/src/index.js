import playGame from "./game/playGame.js"
import getGameResult from "./game/getGameResult.js";
import getCom from "./input/getCom.js";

// 함수 구조 참고
export default function BaseballGame() {
    const computer = getCom();
    // const computer = [4,2,5]
    console.log('computer :', computer)

    this.play = function (computer, user) {
        console.log('user :', user)
        return getGameResult(computer, user);
    };

    playGame(computer, this.play)
  }

new BaseballGame();