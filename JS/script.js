const startButton = document.getElementById('start-btn'); //use const as this btn wont change
const nextButton = document.getElementById('next-btn'); 

const questionContainerElement = document.getElementById('question-container');
let shuffleQuestions, currentQuestionIndex;

const questions = [
    {
        question: "what is 2 + 2", 
        answer: [
            {
                text: '4', correct: true},
                {text:'22', correct: false },
                {text: '21', correct: false},
                {text: 'what', correct: false}

        ]
    },
    {
        question: "what is 9 + 10", 
        answer: [
            {
                text: '4', correct: false},
                {text:'22', correct: false },
                {text: '21', correct: true},
                {text: "43", correct: false}
        ]
    },
    {
        question: "what is Python?", 
        answer: [
            {
                text: 'web server', correct: false},
                {text:'programming language', correct: true },
                {text: 'snake', correct: false}

        ]
    }
]

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    //to start the game
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
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})
    if(shuffleQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')//to show the next btn after selecting the answer
}else{
    startButton.innerText = "RESTART?"
    startButton.classList.remove('hide')
}
}

function setStatusClass(element, correct){
clearStatusClass(element)
if (correct){
    element.classList.add('correct')
} else {
    element.classList.add('wrong')
}
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}