function guessingGame() {
    const randomNumber = Math.floor(Math.random() * 100)
    let isCorrect = false
    let count = 0
    return function guess (number) {
        if (isCorrect) return "The game is over, you already won!"
        count++
        if (number == randomNumber ) {
            isCorrect = true
            return `You win! You found ${randomNumber} in ${count} ${count === 1 ? "guess" : "guesses"}.`
        }

        if (number < randomNumber) return `${number} is too low!`

        return `${number} is too high!`

    }
}

module.exports = { guessingGame };
