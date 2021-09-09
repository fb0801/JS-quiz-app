const startButton = document.getElementById('start-btn'); //use const as this btn wont change
const questionContainerElement = document.getElementById('question-container');
let shuffleQuestions, currentQuestionIndex;

const questions = [
    {
        question: "what is 2 + 2", 
        answer: [
            {
                text: '4', correct: true},
                {text:'22', correct: false }

        ]
    }
]

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
startButton.addEventListener('click', startGame)

function startGame(){
    //to start the game
console.log('started');
startButton.classList.add('hide');
questionContainerElement.classList.remove('hide');
shuffleQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
setNextQuestion()



}

function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function setNextQuestion(){
    //give user the next question to answer
resetState()//put everything back to default after a new question is given

showQuestion(shuffleQuestions[currentQuestionIndex])

}

function showQuestion(question){
    //show the question on the card and display the next question along with the options
questionElement.innerText = question.question
question.answer.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct){
        button.dataset.correct = answer.correct
    }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
})
}

function selectAnswer(e){
//select the answer


}