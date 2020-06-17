// Variables
var clock = document.getElementById("timer");
var secondsLeft = 75;
var clockInterval;

var startQ = document.getElementById("#startQuiz");
var takeQ = document.getElementById("#takeQuiz");
var qn = document.getElementById("#question");
var startB = document.getElementById("#startBtn");
var answ1 = document.getElementById("#btnA1");
var answ2 = document.getElementById("#btnA2");
var answ3 = document.getElementById("#btnA3");
var answ4 = document.getElementById("#btnA4");
var quizR = document.getElementById("#result");
var fScore = document.getElementById("#finalScore");
var quizD = document.getElementById("#quizDone");
var quizS = document.getElementById("#Score");
var int = document.getElementById("#initials");
var submitB = document.getElementById("#submitBtn");




// Event Listeners
startB.addEventListener("click", funtion(event)) {
    
  // user clicks the Start Quiz button
  // hide the startQuiz section and show the takeQuiz section

  if (event === null) {
    return;
  }

  takeQuiz();
}
