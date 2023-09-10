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


const questions = [
  {
    question: "Commonly used data type DO NOT include:",
    choices: [
      { answer: "1.booleans", correct: false },
      { answer: "2.alerts", correct: true },
      { answer: "3.numbers", correct: false },
      { answer: "4.strings", correct: false }
    ],
  },
  {
    question: "the condition in an if / else statementis enclosed within ____:",
    choices: [
      { answer: "1.quotes", correct: false },
      { answer: "2.curly brackets", correct: false },
      { answer: "3.parentheses", correct: true },
      { answer: "4.square brackets", correct: false }
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    choices: [
      { answer: " 1.numbers and strings", correct: false },
      { answer: "2.other arrays", correct: false },
      { answer: "3.booleans", correct: false },
      { answer: "4.all of the above", correct: true }
    ],
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variable:",
    choices: [
      { answer: "1.commas", correct: false },
      { answer: "2.curly brackets", correct: true },
      { answer: "3.quotes", correct: false },
      { answer: "4.parentheses", correct: false }
    ],
  },
 
]



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