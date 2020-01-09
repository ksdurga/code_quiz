$(document).ready(function() {
//questions and answers
   var quizArr = [
      //1
      { 
         question: "Commonly used data types DO NOT include:",
            answers: [
            {text: "Strings", correct: false},
            {text: "Booleans", correct: false},
            {text: "Alerts", correct: true},
            {text: "Numbers", correct: false}
            ],
         },
      
      //2
      {
         question: "The condition in an if / else statement is enclosed within ____.",
            answers: [
            {text: "Quotes", correct: false},
            {text: "Curly Brackets", correct: false},
            {text: "Parenthesis", correct: true},
            {text: "Square Brackets", correct: false}
            ],
      },
      //3
      {
         question: "What is the name of the statement that is used to exit or end a loop?",
            answers: [
            {text: "Close Statement", correct: false},
            {text: "Falter Statement", correct: false},
            {text: "Conditional Statement", correct: false},
            {text: "Break Statement", correct: true}
            ],
      },
      //4
      {
         question: "What is the language or list of instructions that are executed by the computer (how JavaScript is built)?",
            answers: [
            {text: "Syntax", correct: true},
            {text: "JSON", correct: false},
            {text: "Scope", correct: false},
            {text: "Output", correct: false}
            ],
      },
      //5
      {   
         question: "What is the format called that is used for storing and transporting data?",
            answers: [
            {text: "Font", correct: false},
            {text: "Syntax", correct: false},
            {text: "HTML", correct: false},
            {text: "JSON", correct: true}
            ],
      },
      //6
      {
         question: "What is the element used – and hidden – in code that explains things and makes the content more readable?",
            answers: [
            {text: "Comments", correct: true},
            {text: "Quotations", correct: false},
            {text: "Comparisons", correct: false},
            {text: "Notes", correct: false}
            ],
      },
      //7
      {
         question: "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
            answers: [
            {text: "Else Loop", correct: false},
            {text: "Conditional Loop", correct: false},
            {text: "While Loop", correct: true},
            {text: "For Loop", correct: false}
            ],
      },
      //8
      {
         question: "In JavaScript, what element is used to store and manipulate text, usually in multiples?",
            answers: [
            {text: "Strings", correct: true},
            {text: "Arrays", correct: false},
            {text: "Variable", correct: false},
            {text: "Recorders", correct: false}
            ],
      },
      //9
      {
         question: "In JavaScript, what element is used to store multiple values in a single variable?",
            answers: [
            {text: "Functions", correct: false},
            {text: "Arrays", correct: true},
            {text: "Strings", correct: false},
            {text: "Variables", correct: false}
            ],
      },
      //10
      {
         question: "What kind of statement is used to execute actions based on a trigger or condition?",
            answers: [
            {text: "Fired Event", correct: false},
            {text: "Boolean Variable", correct: false},
            {text: "Regular Expression", correct: false},
            {text: "Conditional Statement", correct: true}
            ],
      },
      //11
      {
         question: "What is the object called that lets you work with both dates and time-related data?",
            answers: [
            {text: "Dates", correct: false},
            {text: "Clock", correct: false},
            {text: "Time-warp", correct: false},
            {text: "Time-field", correct: true}
            ],
      },
      //12
      {
         question: "What is considered to be the most popular programming language in the world?",
            answers: [
            {text: "HTML", correct: false},
            {text: "Ruby", correct: false},
            {text: "Swift", correct: false},
            {text: "JavaScript", correct: true}
            ],
      },
      //13
      {
         question: "What tag is used to define a container for an external app or plug-in in HTML?",
            answers: [
            {text: "<!DOCTYPE>", correct: false},
            {text: "<caption>", correct: false},
            {text: "<code>", correct: false},
            {text: "<embed>", correct: true}
            ],
      },
      //14
      {
         question: "What tag is used to define a list item (in a bulleted list)?",
            answers: [
            {text: "<li>", correct: false},
            {text: "<s>", correct: false},
            {text: "<u>", correct: false},
            {text: "<ul>", correct: true}
            ],
      },
      //15
      {
         question: "What tag is used to specify a section of text that provides an example of computer code?",
            answers: [
            {text: "<embed>", correct: false},
            {text: "<!DOCTYPE>", correct: false},
            {text: "<caption>", correct: false},
            {text: "<code>", correct: true}
            ],
      }
   ];

   
   /*PSEUDO CODE
   create element that displays quiz questions and answers
   once answer is selected display next question and answer set
   if answer selected matches correct answer do nothing else subtract 5 seconds from timer
   */

   //Global Variables
   var home = $("#homepage");
   var startBtn = $("#start-btn");
   var quizDiv = $("#quiz");
   var time = $("#timer");
   var questionCount = 0;
   var secondsLeft = 5;
   var currentScore = 0;
   var highScores = [];
   var currentQuestion = $("<p>");
   var currentAnswers = $("#optionDisplay");
   var enterScore;
   let currentQuestionIndex;
   var nextBtn = $("#next");
   
//   function displayQuestion(num) {
   
 
//    for (var i = 0; i < questions[num].choices.length; i++) {
//      $("#optionDisplay").append("<li class='list-inline-item border-0 mb-n2'><a class='choice btn btn-primary' tabindex=" + i + ">" + questions[num].choices[i]);
//    }
//  }
   //function initialize ();
      //startGame();
      //nextQuestion();
      //displayScore();
      //saveScore();
      //timer();
      //check();
      //endGame();

   // function writeData();
   // function readData();
   // function startGame();
   // function endGame();
      //take user to page that displays a form for logging score
   // function nextQuestion();
   // function startTimer();
   // function updateScore();
   // function save();
   // function listAnswers();
   $("#score-keeper").hide();
   // console.log(quizArr[question[1]]);
   function startGame () {
      console.log("click");
      $("#homepage").hide();
      $("#score-keeper").hide();
   };
   // function endGame () {

   // });

   // Iniitializes Quiz
   startBtn.on("click", function(e) {
     e.preventDefault();
     startGame();
   //   nextQuestion();
     timer();
     showQuestion(questionCount);
   });

   function endGame() {
      $("#score-keeper").show();
      
   };

   $("#optionDisplay").click(function(event) {
      var clickedIndex = parseInt($(event.target).attr("tabindex"));
      if (
        questions[questionCount].choices[clickedIndex] ==
        questions[questionCount].answer
      ) {
        console.log("Correct");
        questionCount++;
        currentScore += 10;
        clearQuestions();
        if (questionCount < questions.length) {
          displayQuestion(questionCount);
        } else {
          gameOver();
        }
      }
   });
   //Displays all questions
   function showQuestion (num) {
      $("#questionDisplay").text(quizArr[num].question);
      for (i=0; i<quizArr[num].question.length; i++) {
         $("#questionOptions").append(
            "<li class='list-inline-item border-0 mb-lg-n2'><a class='choice btn btn-primary' tabindex=" +
            i +
            ">" +
            quizArr.questions[num].answers[i]
         );
      }
   };

   // function displayQuestion(num) {
   //    $("#questionHead").text(questions[num].title);
    
   //    for (var j = 0; j < questions[num].choices.length; j++) {
   //      $("#questionOptions").append(
   //        "<li class='list-inline-item border-0 mb-lg-n2'><a class='choice btn btn-primary' tabindex=" +
   //          j +
   //          ">" +
   //          questions[num].choices[j]
   //      );
   //    }
   //  }
   
   
   // function nextQuestion(question) {
   //    currentQuestion.innerHTML = quizArr.question;
   //    quizArr.answers.forEach(answer => {
   //       var button = document.createElement('button');
   //       button.innerHTML = answer.text;
   //       button.classList.add('btn');
   //       if( answer.correct ) {
   //          button.dataset.correct = answer.correct;
   //       } else {
   //          button.dataset.correct = answer.wrong;
   //       }
   //       // button.addEventListener('click', selectAnswer);
   //       answerButtonsElement.appendChild(button);
   //    });
   // };
      
      
      // for (i=0; i<quizArr.length; i++) {
      //    var currentQuestion=quizArr.question[i];
      // }
      // questionHead.text(currentQuestion);
   //    for (var i = 0; i < quizArr[question].answers.length; i++) {
   //       $("#questionOptions").append("<li class='list-inline-item border-0 mb-lg-n2'><a class='choice btn btn-primary' tabindex=" + i + ">" + quizArr[question].answers[i]
   //   );
   //   currentQuestion.text(quizArr[question].answer);
  

   
 

   function timer() {
      console.log("timer started");
      setInterval(function(){
         time.text("Time: " + secondsLeft);
         secondsLeft--;
         if(secondsLeft <= 0) {
            clearInterval(timer);
            endGame();
            time.text("Time: " + 0);
         }
      }, 1000);
      setInterval(secondsLeft);
      if(secondsLeft <= 0) {
         clearInterval(timer);
         endGame();
         time.text("Time: " + 0);
      }
      
   };

   nextBtn.on("click", function(e){
      change_question();
   }) 
   var question_container = $('<div>').attr('id', 'question').insertAfter('#quiz');
  
   // Helper function for changing the question and updating the buttons
   function change_question() {
      for (i=0; i<quizArr.length; i++) {
         currentQuestion=quizArr[i].question;
         console.log(quizArr[i].question);
         $("#quiz").attr({display: "inline-block"});
         $("#questionDisplay").append(currentQuestion);
         questionCount=quizArr.indexOf(quizArr[i].question);
         console.log(questionCount);
      }
   //   quizArr.indexOf(question).write(question_container);
     $('#prev-question-button').prop('disabled', quizArr.indexOf(question) === 0);
     $('#next-question-button').prop('disabled', quizArr.indexOf(question) === quizArr.length - 1);
    
     
     // Determine if all questions have been answered
   //   var all_questions_answered = true;
   //   for (var i = 0; i < quizArr.length; i++) {
   //     if (quizArr.questions[i].answers === null) {
   //       all_questions_answered = false;
   //       break;
   //     }
   //   }
   //   $('#submit-button').prop('disabled', !all_questions_answered);
   }




   







});
