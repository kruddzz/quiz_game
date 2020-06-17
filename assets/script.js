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

var numCorrectAnswers = 0;
var numTotalQuestions = 0;
var intQuestion = 0;  // first question starts at 0
var blnCorrect = false;
var endScore = 0;
var finQuestion = false;

takeQ.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches("button")) {
    //which button did they click
    // console.log("button clicked: " + element.id);
    

    quizR.textContent = element.getAttribute("data-answered");
    quizR.style.color = "red";
    // console.log(quizR);
    if (element.getAttribute("data-answered") === "Correct") {
      blnCorrect = true;
      quizR.style.color = "green";
      numCorrectAnswers++;
    } else {
      // incorrect answer, penalize them 5 second
      secondsLeft -= 5;
      checkTimeRemaining();

    }
    
    // load the next question
    intQuestion++;
    loadQuestion();
  }

});


// Event Listeners
startB.addEventListener("click", funtion(event) {

  // user clicks the Start Quiz button
  // hide the Start Page section and show the TakeQuiz section

  if (event === null) {
    return;
  }

  takeQuiz();
});


