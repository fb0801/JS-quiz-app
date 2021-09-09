const startButton = document.getElementById('start-btn'); //use const as this btn wont change
const questionContainerElement = document.getElementById('question-container');
const shuffleQuestions, currentQuestionIndex;

const questions = [
    {
        question: "what is 2 + ", 
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


function setNextQuestion(){
    //give user the next question to answer
showQuestion(shuffleQuestions[currentQuestionIndex])

}

function showQuestion(question){
questionElement.innerText = question.question
}

function selectAnswer(){
//select the answer


}