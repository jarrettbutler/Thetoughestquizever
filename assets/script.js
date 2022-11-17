var startEl = document.getElementById('start');
var startBtn = document.getElementById('startBtn');
var questionEl = document.getElementById('question');
var answerbuttonsEl = document.getElementById('answer-buttons');
var wrongEl = document.getElementById('wrong');
var correctEl = document.getElementById('correct');
var scoreEl = document.getElementById('score')
var viewHighscoreEl = document.getElementById('viewHighscore');
var timerEl = document.getElementById('timer');
var timeleft;
var questionIndex = 0;
var score = 0

//My array of array of questions
var questionArr = [
  {
    q: 'What does HTML stand for?',
    a: 'c) HyperText Markup Language',
    choices: [{ choice1: 'a) Home Tool Markup Language' }, { choice2: 'b) Hyperlinks and Text Markup Language' }, { choice3: 'c) HyperText Markup Language' }, { choice4: 'd) I have no sweet clue' }]
  },
  {
    q: 'What does CSS stand for?',
    a: 'a) Cascading Style Sheet',
    choices: [{ choice1: 'a) Cascading Style Sheet' }, { choice2: 'b) Colorful Style Sheet' }, { choice3: 'c) Creative Style Sheet' }, { choice4: 'd) Please for the love of god give me the answer' }]
  },
  {
    q: 'Where is the most likely spot to find JavaScript inserted?',
    a: 'b) The <body> section',
    choices: [{ choice1: 'a) The <head> section' }, { choice2: 'b) The <body> section' }, { choice3: 'c) Both' }, { choice4: 'd) Why must you make these quizzes so hard' }]
  },
  {
    q: 'How do you make an alert box in JavaScript?',
    a: 'a) alert()',
    choices: [{ choice1: 'a) alert()' }, { choice2: 'b) alrt()' }, { choice3: 'c) alertBox()' }, { choice4: 'd) Wow I am about to give up' }]
  },
  {
    q: 'Which is a way to define a variable?',
    a: 'c) var',
    choices: [{ choice1: 'a) constant' }, { choice2: 'b) variable' }, { choice3: 'c) var' }, { choice4: 'd) Got me again' }]
  },
  {
    q: 'Does CSS suck?',
    a: 'b) Yes',
    choices: [{ choice1: 'a) No' }, { choice2: 'b) Yes' }, { choice3: 'c) No' }, { choice4: 'd) You know the right answer' }]
  },
  {
    q: 'Which HTML element is used to specify the footer of a document?',
    a: 'c) footer',
    choices: [{ choice1: 'a) section' }, { choice2: 'b) bottom' }, { choice3: 'c) footer' }, { choice4: 'd) I give up' }]
  },
  {
    q: 'Are you happy this is the last question?',
    a: 'a) Yes',
    choices: [{ choice1: 'a) Yes' }, { choice2: 'b) No' }, { choice3: 'c) Maybe So' }, { choice4: 'd) Finally I know this one' }]
  },
];

//this is where it starts after you click the start button
startBtn.addEventListener('click', function(){
  startGame()
  setTime()
});

//When you click the start button the timer should begin the countdown from 120
var setTime = function () {
  timeleft = 120;
var timercheck = setInterval(function() {
  timerEl.innerText = timeleft;
  timeleft--
  if (timeleft == 0) {
      clearInterval(timercheck)
  }
  if (timeleft < 0) {
      timerEl.innerText = 0
      clearInterval(timercheck)
  }
  }, 1000)
}

//This is supossed to be where I program the questions appearing
var startGame = function() {
  startEl.classList.add('hide');
  startEl.classList.remove('show');
  questionEl.classList.remove('hide');
  questionEl.classList.add('show');

  //Shuffle questions
  arrayShuffledQuestions = questionArr.sort(() => Math.random() - 0.5)
  setTime()
  setQuestion()
}

//this will get you the next question
var setQuestion = function() {
  resetAnswers()
  displayQuestion(arrayShuffledQuestions[questionIndex])
}

//resete answer buttons
var resetAnswers = function() {
  while (answerbuttonsEl.firstChild) {
      answerbuttonsEl.removeChild(answerbuttonsEl.firstChild)
  };
};

//displays the question
var displayQuestion = function(index) {
  questionEl.innerText = index.q
  for (var i = 0; i < index.choices.length; i++) {
      var answerbutton = document.createElement('button')
      answerbutton.innerText = index.choices[i].choice
      answerbutton.classList.add('bttn')
      answerbutton.classList.add('answerbttn')
      answerbutton.addEventListener("click", answerCheck)
      answerbuttonsEl.appendChild(answerbutton)
      }
  };

//display correct! message on screen below answers
var answerCorrect = function() {
  if (correctEl.className = "hide") {
      correctEl.classList.remove("hide")
      correctEl.classList.add("banner")
      wrongEl.classList.remove("banner")
      wrongEl.classList.add("hide")
      }
  }  
//display wrong! message on screen below answers
var answerWrong = function() {
  if (wrongEl.className = "hide") {
      wrongEl.classList.remove("hide")
      wrongEl.classList.add("banner")
      correctEl.classList.remove("banner")
      correctEl.classList.add("hide")
  }
}

//Checks to see if the answer is correct
var answerCheck = function(event) {
  var selectedanswer = event.target
      if (arrayShuffledQuestions[questionIndex].a === selectedanswer.innerText){
          answerCorrect()
          score = score + 1
      }

      else {
        answerWrong()
        timeleft = timeleft - 10;
    };

 //go to next question, check if there is more questions
 questionIndex++
 if  (arrayShuffledQuestions.length > questionIndex + 1) {
     setQuestion()
 }   
 else {
    gameover = "true";
    showScore();
     }
}

  //Display total score screen at end of game
  var showScore = function () {
    questionEl.classList.add("hide");
    scoreEl.classList.remove("hide");
    scoreEl.classList.add("show");
  
    var scoreDisplay = document.createElement("p");
    scoreDisplay.innerText = ("Your final score is " + score + "!");
    containerScoreEl.appendChild(scoreDisplay);
  } 
