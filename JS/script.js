const startButton = document.getElementById('start-btn'); //use const as this btn wont change
const questionContainerElement = document.getElementById('question-container');
const shuffleQuestions, currentQuestionIndex;

const questions = [
    {

}
];


startButton.addEventListener('click', startGame)

function startGame(){
    //to start the game
console.log('started');
startButton.classList.add('hide');
questionContainerElement.classList.remove('hide');
setNextQuestion()



}


function setNextQuestion(){
    //give user the next question to answer





}

function selectAnswer(){
//select the answer


}