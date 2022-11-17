var startEl = document.getElementById('start');
var startBtn = document.getElementById('startBtn');
var questionEl = document.getElementById('question');
var answerbuttonsEl = document.getElementById('answer-buttons');
var wrongEl = document.getElementById('wrong');
var correctEl = document.getElementById('correct');
var scoreEl = document.getElementById('score')
var viewHighscoreEl = document.getElementById('viewHighscore');
var timerEl = document.getElementById('timer');
var highscoreEl = document.getElementById('highscore')
var timeleft;
var questionIndex = 0;
var score = 0

//My array of array of questions
var questionArr = [
  {
    q: 'What does HTML stand for?',
    a: 'c) HyperText Markup Language',
    choices: [{ choice: 'a) Home Tool Markup Language' }, { choice: 'b) Hyperlinks and Text Markup Language' }, { choice: 'c) HyperText Markup Language' }, { choice: 'd) I have no sweet clue' }]
  },
  {
    q: 'What does CSS stand for?',
    a: 'a) Cascading Style Sheet',
    choices: [{ choice: 'a) Cascading Style Sheet' }, { choice: 'b) Colorful Style Sheet' }, { choice: 'c) Creative Style Sheet' }, { choice: 'd) Please for the love of god give me the answer' }]
  },
  {
    q: 'Where is the most likely spot to find JavaScript inserted?',
    a: 'b) The <body> section',
    choices: [{ choice: 'a) The <head> section' }, { choice: 'b) The <body> section' }, { choice: 'c) Both' }, { choice: 'd) Why must you make these quizzes so hard' }]
  },
  {
    q: 'How do you make an alert box in JavaScript?',
    a: 'a) alert()',
    choices: [{ choice: 'a) alert()' }, { choice: 'b) alrt()' }, { choice: 'c) alertBox()' }, { choice: 'd) Wow I am about to give up' }]
  },
  {
    q: 'Which is a way to define a variable?',
    a: 'c) var',
    choices: [{ choice: 'a) constant' }, { choice: 'b) variable' }, { choice: 'c) var' }, { choice: 'd) Got me again' }]
  },
  {
    q: 'Does CSS suck?',
    a: 'b) Yes',
    choices: [{ choice: 'a) No' }, { choice: 'b) Yes' }, { choice: 'c) No' }, { choice: 'd) You know the right answer' }]
  },
  {
    q: 'Which HTML element is used to specify the footer of a document?',
    a: 'c) footer',
    choices: [{ choice: 'a) section' }, { choice: 'b) bottom' }, { choice: 'c) footer' }, { choice: 'd) I give up' }]
  },
  {
    q: 'Are you happy this is the last question?',
    a: 'a) Yes',
    choices: [{ choice: 'a) Yes' }, { choice: 'b) No' }, { choice: 'c) Maybe So' }, { choice: 'd) Finally I know this one' }]
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

//This is where we create the answer child
var resetAnswers = function() {
  while (answerbuttonsEl.firstChild) {
      answerbuttonsEl.removeChild(answerbuttonsEl.firstChild)
  };
};

//displays the question & choices
var displayQuestion = function(index) {
  questionEl.innerText = index.q
  for (var i = 0; i < index.choices.length; i++) {
      var answerbutton = document.createElement('button')
      answerbutton.setAttribute('style', 'background-color: #EEA47FFF; color: #00539CFF: font-size: large; font-weight: bolder; margin: 5px; padding: 15px 30px; outline: auto; border-radius:25%; cursor: pointer;')
      answerbutton.innerText = index.choices[i].choice
      answerbutton.classList.add('btn')
      answerbutton.classList.add('answerbtn')
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
    answerbuttonsEl.classList.add("hide");
    scoreEl.classList.remove("hide");
    scoreEl.classList.add("show");
    wrongEl.classList.add("hide");
    correctEl.classList.add("hide");
    
  
    var scoreDisplay = document.createElement("p");
    scoreDisplay.innerText = ("Your final score is " + score + "!");
    scoreEl.appendChild(scoreDisplay);
  } 
