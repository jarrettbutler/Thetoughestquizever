//grabbing and hooking into all the points in our html as well as defining all our variables
var quizEl = document.getElementById("quiz");
var rulesEl = document.getElementById("rules");
var endGameEl = document.getElementById("endGame")
var scoreEl = document.getElementById("score")
var formInitials = document.getElementById("initials-form")
var highscoresEl = document.getElementById("highscores")
var viewHighscoreEl = document.getElementById("viewHighscore")
var listHighscoreEl = document.getElementById("highscoreList")
var rightEl = document.getElementById("right")
var wrongEl = document.getElementById("wrong")

var btnstartEl = document.querySelector("#startBtn");
var btnRestartEl = document.querySelector("#restart")

var questionsEl = document.getElementById("#questions")
var answerEl = document.getElementById("#answer")
var timerEl = document.querySelector("#timer");

var score = 0;
var timeleft;
var gameover;
var highscores = [];
var arrayShuffledQuestions;
var questionIndex = 0;
timerEl.innerText = 0;

//The array of array of questions
var questions = [
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
