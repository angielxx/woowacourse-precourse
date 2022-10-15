export default function printGameResult(gameResult) {
    const result = document.getElementById('result')
    const restartBtn = document.getElementById('game-restart-button')
    if (gameResult === '정답') {
        result.innerHTML =
            '<span><strong>🎉 정답을 맞추셨습니다!🎉</strong></span>' +
            '<span>게임을 다시 시작하시겠습니까? </span>'
        restartBtn.classList.remove('hidden')
    } else {
        result.innerHTML - `<span>${gameResult}</span>`
    }
}