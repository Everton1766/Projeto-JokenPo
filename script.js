const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanchoise) => {

    playTheGame(humanchoise, playMachine())

}


const playMachine = () => {
    const choises = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choises[randomNumber]

}

const playTheGame = (human, machine) => {
    console.log('humano: ' + human + 'maquina: ' + machine)

    if (human === machine) {
        result.innerHTML = 'Deu empate!😑'
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
        ) {        
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Você ganhou parabéns🤣'
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu pra Alexa!😢'
    }
    
}