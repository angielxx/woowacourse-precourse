export const restartBtn = document.getElementById('game-restart-button')
export const result = document.getElementById('result')

export function printGameResult(gameResult) {
    if (gameResult === 'μ λ΅') {
        result.innerHTML =
            '<span><strong>π μ λ΅μ λ§μΆμ¨μ΅λλ€!π</strong></span><br>' +
            '<span>κ²μμ λ€μ μμνμκ² μ΅λκΉ? </span>'
        restartBtn.classList.remove('hidden')
        // μ λ΅μΌ λ true λ°ν
        return true;
    } else {
        result.innerHTML = `<span>${gameResult}</span>`
        // μ λ΅μ΄ μλ λ false λ°ν
        return false;
    }
}