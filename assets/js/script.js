var timerEl = document.getElementById("timer");
var timeLeft = 0
timerEl.textContent = "Time: " + timeLeft

var firstPageEl = document.querySelector(".firstPage")
var allQuestions = document.querySelector(".allQuestions")
var lastPageEl = document.querySelector(".lastPage")
var highscorePage = document.querySelector(".highscorePage")
var highscoreList = document.querySelector('#highscoreList')
var userInitialsInput = document.querySelector('h6')
var highscoreLink = document.querySelector('#highScoreLink')

var result = document.querySelector('.result')
var finalScore = document.querySelector("#finalScoreTotal")
var submitButton = document.querySelector("#submit")
var initialsInput = document.querySelector('#initialsInput')
var clearHighscores = document.querySelector('#clearHighscores')
var goBackButton = document.querySelector('#goBack')


function showLastPage() {
  allQuestions.classList.add('hide')
  lastPageEl.classList.remove('hide')
  result.classList.add('hide')
  finalScore.textContent += timeLeft
 }
 


var timeLeft = 75;
function countdown() {
  var timeInterval = setInterval(function () {
    timerEl.textContent = "Time: " + timeLeft;
    timeLeft--;

    if (timeLeft === 0 || count === 4) {
      timerEl.textContent = "Times Up!";
      showLastPage()
      clearInterval(timeInterval)
    }
  }, 1000);
}


const questions =[
    {
      question: "What is the result of 2 + 2 in JavaScript?",
      choices: [
        { answer: "4", correct: true },
        { answer: "6", correct: false },
        { answer: "8", correct: false },
        { answer: "10", correct: false }
      ],
    },
    {
      question: "What keyword is used to declare a variable in JavaScript?",
      choices: [
        { answer: "var", correct: true },
        { answer: "let", correct: false },
        { answer: "const", correct: false },
        { answer: "int", correct: false }
      ],
    },
    {
      question: "Which programming language is used for creating web pages?",
      choices: [
        { answer: "Java", correct: false },
        { answer: "Python", correct: false },
        { answer: "HTML", correct: true },
        { answer: "C++", correct: false }
      ],
    },
    {
      question: "What is the capital of France?",
      choices: [
        { answer: "Berlin", correct: false },
        { answer: "Madrid", correct: false },
        { answer: "Rome", correct: false },
        { answer: "Paris", correct: true }
      ],
    },
    {
      question: "Which symbol is used for single-line comments in JavaScript?",
      choices: [
        { answer: "//", correct: true },
        { answer: "/*", correct: false },
        { answer: "--", correct: false },
        { answer: "#", correct: false }
      ],
    }
  ];



const questionH3 = document.getElementById('question-h3')
const answersUl = document.getElementById('answers-ul')
let count = 0


function showNextQuestion() {
  if(count <= 3){

  
  firstPageEl.classList.add('hide')
  lastPageEl.classList.add('hide')
  allQuestions.classList.remove('hide')
  
  questionH3.textContent = questions[count].question
  while (answersUl.firstChild) {
    answersUl.firstChild.remove();
  }
  for (i = 0; i < questions[count].choices.length; i++) {
    answerBtn = document.createElement('button')
    answerBtn.setAttribute('data-correct', questions[count].choices[i].correct)
    answerBtn.innerText = questions[count].choices[i].answer
    answersUl.appendChild(answerBtn)
  }
}
 
 
}
function checkAnswer(event){
  if(event.target.tagName === "BUTTON"){
    if(event.target.getAttribute('data-correct') === "true"){
      result.textContent= "Correct!"
      count++
      showNextQuestion();

    } else{
      timeLeft = timeLeft - 10
      result.textContent= "Wrong!"
      count++
      showNextQuestion();

    }
    
  }
}
answersUl.addEventListener('click', checkAnswer)

 
function showHighscorePage() {
  firstPageEl.classList.add('hide')
  lastPageEl.classList.add('hide')
  result.classList.add('hide')
  highscorePage.classList.remove('hide')
  userInitialsInput.innerHTML = localStorage.getItem('value') + ' - ' + finalScore.textContent
}
function startQuiz() {
  countdown()
  showNextQuestion()
}

function userInitials(){
 localStorage.setItem('value', initialsInput.value)
}
function userScore (){
  localStorage.setItem('score', finalScore.textContent)
}
function clearUserInput(){
  localStorage.clear('value')
  userInitialsInput.innerHTML = ""
}
function restartQuiz(){
  location.reload()
}


var startQuizButton = document.querySelector(".startbutton")
startQuizButton.addEventListener("click", startQuiz)
initialsInput.addEventListener('keyup', function(){
  userInitials()
  userScore()
})
clearHighscores.addEventListener('click', clearUserInput)
goBackButton.addEventListener("click", restartQuiz)

submitButton.addEventListener("click", showHighscorePage)

highscoreLink.addEventListener('click', function(){
  showHighscorePage()
  userInitialsInput.innerHTML = localStorage.getItem('value') + ' - ' +localStorage.getItem('score') 
})