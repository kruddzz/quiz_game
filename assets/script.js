var clock = document.getElementById("timer");
var secondsLeft = 75;
var clockInterval;

var startQ = document.getElementById("startQuiz");
var takeQ = document.getElementById("takeQuiz");
var qn = document.getElementById("question");
var answ1 = document.getElementById("a1Btn");
var answ2 = document.getElementById("a2Btn");
var answ3 = document.getElementById("a3Btn");
var answ4 = document.getElementById("a4Btn");
var quizR = document.getElementById("result");
var fScore = document.getElementById("finalScore");
var quizD = document.getElementById("quizDone");
var quizS = document.getElementById("score");
var int = document.getElementById("initials");


var numCorrectAnswers = 0;
var numTotalQuestions = 0;
var idxQuestion = 0;  // first question starts at 0
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
    idxQuestion++;
    loadQuestion();
  }

});

function loadQuestion() {
    var idxCorrect = -99;
    
    if (questions [idxQuestion] === undefined) {
        //final qestion in array has been reached 
        finQuestion = true;
      
        return;
    }


  numTotalQuestions++;

qn.textContent = questions [idxQuestion].title;

answ1.textContent = questions [idxQuestion].choices[0];
answ2.textContent = questions [idxQuestion].choices[1];
answ3.textContent = questions [idxQuestion].choices[2];
answ4.textContent = questions [idxQuestion].choices[3];

    // using .setAattribute allows us to add specified elements to the answer buttons
answ1.setAttribute("data-answered", "Incorrect");
answ2.setAttribute("data-answered", "Incorrect");
answ3.setAttribute("data-answered", "Incorrect");
answ4.setAttribute("data-answered", "Incorrect");

    // used a switch statement to execute the correct block of code
  switch (idxCorrect) {
    case 0:
      answ1.setAttribute("data-answered", "Correct");
      break;
    case 1:
      answ2.setAttribute("data-answered", "Correct");
      break;
    case 2:
      answ3.setAttribute("data-answered", "Correct");
      break;
    case 3:
      answ4.setAttribute("data-answered", "Correct");
      break;

  }
}

function setTime() {
    clockInterval = setInterval(function () {
      secondsLeft--;
  
      if (!secondsLeft > 0) {
        secondsLeft = 0;
      }
      // clock.textContent = "Time: "+ secondsLeft;
   clock.textContent = "Time: " + secondsLeft.toString().padStart(2, '0');
      checkTimeRemaining();
  
    }, 1000);
  }
  function checkTimeRemaining() {

    if (secondsLeft <= 0 || finQuestion) {
      clearInterval(clockInterval);
  
      showFinalScore();
    }
  }
  
  function takeQuiz() {

    //populate 1st quiz question
   idxQuestion = 0;
    loadQuestion();
    // hide the main section
    startQ.classList.add("d-none");
    takeQ.classList.remove("d-none");
  
    //  start timer 
    setTime();
  
  }
  function showFinalScore() {
  // hide the main section and the quiz section
  takeQ.classList.add("d-none")
  fScore.classList.remove("d-none");
  quizD.textContent = "All done!";
  if (!secondsLeft > 0) {
    secondsLeft = 0;
  }


  endScore = 0;
  if (numCorrectAnswers > 0) {

    endScore = Math.round(100 * (numCorrectAnswers / numTotalQuestions) + (0.2 * secondsLeft));
    if (endScore > 100) {
      endScore = 100;
    }
  }
  console.log("note: Total questions= " + numTotalQuestions + "\n correct answers= " + numCorrectAnswers + "\n seconds left= " + secondsLeft + "\n final score= " + endScore);

  quizS.textContent = "Your final score is " + endScore;

}
var startB = document.querySelector("#startBtn");
var submitB = document.querySelector("#submitBtn");

// Event Listeners
startB.addEventListener("click", function(event) {

    // user clicks the Start Quiz button
    // hide the startQuiz section and show the takeQuiz section
  
    if (event === null) {
      return;
    }
  
    takeQuiz();
  });

  submitB.addEventListener("click", function(event){

    if (event === null) {
      return;
    }
    //Don't allow user to click submit if they haven't entered initials
    if (int.value.length === 0) {
      alert("Please enter your initials to submit your quiz score.");
      return;
    }
    
    // store final score to localstorage
    // first try to retrieve scores from local storage in case we've taken the quiz before
  
    Scores = JSON.parse(localStorage.getItem('highscores'));
  
    if (Scores !== null) {
  
      Scores.push({
        'initials': document.int.value,
        'highscore': endscore
      });
    } else {
      // Converting to JSON string with JSON.stringify()
      // then saving with localStorage
      Scores = [];
      Scores.push({
        'initials': document.int.value,
        'highscore': endscore
      });
    }
    localStorage.setItem('highscores', JSON.stringify(Scores));
    document.submitB.disabled = true;
    document.submitB.remove("btn-primary");

    fScore.classList.add("d-none");
    document.location.href= "index.html";
  
  });

