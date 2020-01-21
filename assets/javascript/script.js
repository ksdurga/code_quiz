$(document).ready(function() {
//questions and answers
   var quizArr = [
      //1
      { 
         question: "Commonly used data types DO NOT include:",
            answers: [
               {text: "Strings"},
               {text: "Booleans"},
               {text: "Alerts"},
               {text: "Numbers"}
            ],
            correct: "Alerts"
         },
      
      //2
      {
         question: "The condition in an if / else statement is enclosed within ____.",
            answers: [
               {text: "Quotes"},
               {text: "Curly Brackets"},
               {text: "Parenthesis"},
               {text: "Square Brackets"}
            ],
            correct: "Parenthesis"
      },
      //3
      {
         question: "What is the name of the statement that is used to exit or end a loop?",
            answers: [
               {text: "Close Statement"},
               {text: "Falter Statement"},
               {text: "Conditional Statement"},
               {text: "Break Statement"}
            ],
            correct: "Break Statement"
      },
      //4
      {
         question: "What is the language or list of instructions that are executed by the computer (how JavaScript is built)?",
            answers: [
               {text: "Syntax"},
               {text: "JSON"},
               {text: "Scope"},
               {text: "Output"}
            ],
            correct: "Syntax"
      },
      //5
      {   
         question: "What is the format called that is used for storing and transporting data?",
            answers: [
               {text: "Font"},
               {text: "Syntax"},
               {text: "HTML"},
               {text: "JSON"}
            ],
            correct: "JSON"
      },
      //6
      {
         question: "What is the element used – and hidden – in code that explains things and makes the content more readable?",
            answers: [
               {text: "Comments"},
               {text: "Quotations"},
               {text: "Comparisons"},
               {text: "Notes"}
            ],
            correct: "Comments"
      },
      //7
      {
         question: "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
            answers: [
               {text: "Else Loop"},
               {text: "Conditional Loop"},
               {text: "While Loop"},
               {text: "For Loop"}
            ],
            correct: "While Loop"
      },
      //8
      {
         question: "In JavaScript, what element is used to store and manipulate text, usually in multiples?",
            answers: [
               {text: "Strings"},
               {text: "Arrays"},
               {text: "Variable"},
               {text: "Recorders"}
            ],
            correct: "Strings"
      },
      //9
      {
         question: "In JavaScript, what element is used to store multiple values in a single variable?",
            answers: [
               {text: "Functions"},
               {text: "Arrays"},
               {text: "Strings"},
               {text: "Variables"}
            ],
            correct: "Arrays"
      },
      //10
      {
         question: "What kind of statement is used to execute actions based on a trigger or condition?",
            answers: [
               {text: "Fired Event"},
               {text: "Boolean Variable"},
               {text: "Regular Expression"},
               {text: "Conditional Statement"}
            ],
            correct: "Conditional Statement"
      },
      //11
      {
         question: "What is the object called that lets you work with both dates and time-related data?",
            answers: [
               {text: "Dates"},
               {text: "Clock"},
               {text: "Time-warp"},
               {text: "Time-field"}
            ],
            correct: "Time-field"
      },
      //12
      {
         question: "What is considered to be the most popular programming language in the world?",
            answers: [
               {text: "HTML"},
               {text: "Ruby"},
               {text: "Swift"},
               {text: "JavaScript"}
            ],
            correct: "JavaScript"
      },
      //13
      {
         question: "What tag is used to define a container for an external app or plug-in in HTML?",
            answers: [
               {text: "<!DOCTYPE>"},
               {text: "<caption>"},
               {text: "<code>"},
               {text: "<embed>"}
            ],
            correct: "<embed>"
      },
      //14
      {
         question: "What tag is used to define a list item (in a bulleted list)?",
         answers: [
            {text: "<li>"},
            {text: "<s>"},
            {text: "<u>"},
            {text: "<ul>"}
         ],
         correct: "<ul>"
      },
      //15
      {
         question: "What tag is used to specify a section of text that provides an example of computer code?",
         answers: [
            {text: "<embed>"},
            {text: "<!DOCTYPE>"},
            {text: "<caption>"},
            {text: "<code>"}
         ],
         correct: "<code>"
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
   var secondsLeft = 75;
   var currentScore = 0;
   var highScores = [];
   var enterScore;
   var nextBtn = $("#next");
   var questionDislpay = $("#questionDisplay");
   var optionDisplay = $("#options");
   var submitBtn = $("#submit");
   var bonusPoints = 0;

   var users;
   var scores;
   var allUsers = [];
   var allScores = [];
   nextBtn.hide();
   $("#score-keeper").hide();

   //Displays first question
   function showQuestion () {
      questionDislpay.innerHTML = "";
      var question = document.createElement("H3");
      question.textContent = quizArr[questionCount].question;
      questionDislpay.append(question);
      nextBtn.show();
   };

   //hides different things for game
   function startGame () {
      console.log("click");
      $("#homepage").hide();
      $("#score-keeper").hide();
   };

   //displays answer options
   function displayOptions () {
      optionDisplay.innerHTML = "";
      var list = document.createElement("ul");
      list.setAttribute("class", "option-list");
      for (var i = 0; i < quizArr[questionCount].answers.length; i++) {
         var options = quizArr[questionCount].answers[i].text;
         console.log(options);
         var listItem = document.createElement("li");
         var listInput = document.createElement("input");
         listItem.style.marginBottom = "10px";

         listInput.setAttribute("type", "button");
         listInput.setAttribute("value", options);
         listInput.setAttribute("class", "answer-button btn btn-primary");

         listItem.appendChild(listInput);

         listInput.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('click');
            // if correct option selcted iterate to next question

            if (e.target.getAttribute("value") == quizArr[questionCount].correct) {
               currentScore += 10;
               console.log("correct!");
            }
            else {
               console.log("incorrect!")
               secondsLeft = secondsLeft - 5;
               // list.removeChild();

            }
         });
         list.appendChild(listItem);

      optionDisplay.append(list);
      
      };
      nextBtn.on("click", function(){
         while (list.firstChild) {
            list.removeChild(list.firstChild);
         }
      });
   };


   function endGame() {
      nextBtn.hide();
      questionDislpay.hide();
      optionDisplay.hide();
      $("#score-keeper").show();
   };


   // Iniitializes Quiz
   startBtn.on("click", function(e) {
      e.preventDefault();
      startGame();
      //   nextQuestion();
      timer();
      showQuestion(questionCount);
      displayOptions();
   });

   nextBtn.on("click", function(e){
      e.preventDefault();
      questionCount++;
      if (questionCount == 15) {
         bonusPoints += secondsLeft;
         console.log(bonusPoints);
         endGame();
      }
      else {
         questionDisplay.innerHTML = "";
         showQuestion();
         displayOptions();
      };
   });

   
   function timer() {
      console.log("timer started");
      setInterval(function(){
         time.text("Time: " + secondsLeft);
         secondsLeft--;
         if(secondsLeft <= 0) {
            clearInterval(timer);
            endGame();
            time.text("Time: " + 0);
         };
         if (questionCount == 15) {
            clearInterval(timer);
            time.text("Time: " + 0);
         }
      }, 1000);
      
      setInterval(secondsLeft);
      
   };


   submitBtn.on("click", function(e){
      window.location ="highscores.html";
      e.preventDefault();
      init = document.getElementById("inputUser").value;
      console.log(init);
      score = currentScore + bonusPoints;
      console.log(score);
      saveScore();
   });


   function saveScore () {
      localStorage.setItem(init, score);
   }
   var userScores;
   
   function display() {
      for (var i = 0; i < localStorage.length; i++) {
         users = localStorage.key(i);
         scores = localStorage.getItem(users);
         allScores.push(scores);
        
         allUsers.push(users);
         var userlistitem = $("<li>");
         userlistitem.attr("class", "score-list");
         userlistitem.attr("data-id", scores);
         userlistitem.attr("data-position", scores);
         userlistitem.text(users);
         userlistitem.sort(sort_li);
         $(".users").append(userlistitem).sort(sort_li).appendTo(".users");
         console.log(userlistitem.data('position'))

         var scorelistitem = $("<li>");
         scorelistitem.attr("class", "score-list");
         scorelistitem.attr("data-id", scores);
         scorelistitem.attr("data-position", scores)
         scorelistitem.text(scores);
         scorelistitem.sort(sort_li);
         $(".scores").append(scorelistitem).sort(sort_li).appendTo(".scores");
          
        }
         
    
      };
      
      
      function sort_li(a, b){
      //    // a = userlistitem.data('position')
         return ($(a).data('position')) > ($(b).data('position')) ? -1 : 1;   
      
         // console.log(userScores[i]);
            // .getAttribute("data-id"));

      //    alluserscores = userScores[i].getAttribute("data-id");
      
   };



   display();
      

  
  
   
   
   function display_highscore(event){
    

      //set all containers to display nothing
      questionDisplay.textContent = "";
      optionDisplay.innerHTML = "";
      timeDisplay.textContent = "";
      //Set Time to highscore title
      timeDisplay.textContent = "HighScore";
  
      //Get locally stored score
      var scoreSheet = JSON.parse(localStorage.getItem("currentHighScore"));
      var name = scoreSheet.name;
      var score = scoreSheet.score;
      
      quest_dsply.innerHTML = "<h4> Name: "+name+"</h4>"+"<h4> Score: "+score+"</h4>";
  
      //add button to launch game from
  };

});
