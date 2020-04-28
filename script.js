var questionsContainer=document.querySelector("#question-container");
var questionsS=document.querySelector("#questions-section");
var instructionsS=document.querySelector("#instructions-section");
var answersS=document.querySelector("#answers-section");
var startButton = document.querySelector("#start-button");
var scoreDiv=document.querySelector("#score");
var mainDiv=document.querySelector("#main");
var startSep=document.querySelector("#sep");
var ans0=document.querySelector("#ans-0");
var ans1=document.querySelector("#ans-1");
var ans2=document.querySelector("#ans-2");
var ans3=document.querySelector("#ans-3");
var nextBtn=document.querySelector("#next-button");
var resultS=document.querySelector("#result");
var counter=60;
var penalty=10;
var finalScore=0;

//Create question objects
var questionsArr = [
    {
      question: "How many world titles has Lewis Hamilton?",
      answers: [
        {text: "6 titles", correct: true},
        {text: "1 title", correct: false},
        {text: "4 titles", correct: false},
        {text: "No titles", correct: false}
      ]
    },
    {
      question: "How many races does the 2020 championship includes?",
      answers: [
        {text: "15 races", correct: false},
        {text: "20 races", correct: false},
        {text: "21 races", correct: true},
        {text: "18 races", correct: false}
      ]
    },
    {
      question: "For which F1 team Fernando Alonso raced?",
      answers: [
        {text: "Redbull", correct: false},
        {text: "Williams", correct: false},
        {text: "Haas", correct: false},
        {text: "Ferrari", correct: true}
      ]
    },
    {
        question: "In which F1 team Checo Perez made his debut in F1?",
        answers: [
          {text: "Sauber", correct: true},
          {text: "Force India", correct: false},
          {text: "Racing Point", correct: false},
          {text: "McLaren", correct: true}
        ]
      },
  ];
var answersNumber=4;

startButton.addEventListener("click", function(){
  startButton.setAttribute("class","hide");
  startSep.setAttribute("class","hide");
  instructionsS.setAttribute("class","hide");
  game();
  timer();
});

//nextBtn.addEventListener("click", game);

ans0.addEventListener("click", function(){
  if(questionsArr[qNumber].answers[0].correct==false){
    counter=counter-penalty;
    console.log(counter);
    wrongAnswer();
  }
  else{
    counter=counter;
    console.log(counter);
    correctAnswer()
  };
  qNumber++;
  nextQuestion++;
  game();
});

ans1.addEventListener("click", function(){
  if(questionsArr[qNumber].answers[1].correct==false){
    counter=counter-penalty;
    console.log(counter);
    wrongAnswer();
  }
  else{
    counter=counter;
    console.log(counter);
    correctAnswer()
  };
  qNumber++;
  nextQuestion++;
  game();
});

ans2.addEventListener("click", function(){
  if(questionsArr[qNumber].answers[2].correct==false){
    counter=counter-penalty;
    console.log(counter);
    wrongAnswer();
  }
  else{
    counter=counter;
    console.log(counter);
    correctAnswer()
  };
  qNumber++;
  nextQuestion++;
  game();
});

ans3.addEventListener("click", function(){
  if(questionsArr[qNumber].answers[3].correct==false){
    counter=counter-penalty;
    console.log(counter);
    wrongAnswer();
  }
  else{
    counter=counter;
    console.log(counter);
    correctAnswer()
  };
  qNumber++;
  nextQuestion++;
  game();
});


function timer() {
    var countdown=setInterval(function(){
        scoreDiv.innerHTML=("Your score: "+counter);
        counter--;
        if (counter==0){
            console.log("You lose");
            counter=0;
            clearInterval(countdown);
        }
    },1000);
};

var nextQuestion=0;
var qNumber=0;

function game(){
  renderQuestions();
  renderAnswers();
  //nextButton();
  //nextBtn.classList.remove("hide");
    
};

function renderQuestions(){
  console.log(questionsArr.length);

  if(qNumber<questionsArr.length){
    questionsS.textContent=questionsArr[qNumber].question;
    var newSep3=document.createElement("hr");
    newSep3.setAttribute("class","my-4");
    questionsS.appendChild(newSep3);
  }
  else{
    console.log("Game ended");
    finalScore=counter;
    questionsS.textContent="Your score is: "+ counter;
    console.log(finalScore);
    var newSep3=document.createElement("hr");
    newSep3.setAttribute("class","my-4");
    questionsS.appendChild(newSep3);
  }
};

function renderAnswers(){
    answersS.classList.remove("hide");
    /*var p="";
    for(var i=0; i<answersNumber; i++){
      p=("ans"+i);
      p.textContent=questionsArr[qNumber].answers[i].text;
      p.classList.remove("hide");
    };*/
    if(qNumber<questionsArr.length){
      ans0.textContent=questionsArr[qNumber].answers[0].text;
      ans0.classList.remove("hide");
      ans1.textContent=questionsArr[qNumber].answers[1].text;
      ans1.classList.remove("hide");
      ans2.textContent=questionsArr[qNumber].answers[2].text;
      ans2.classList.remove("hide");
      ans3.textContent=questionsArr[qNumber].answers[3].text;
      ans3.classList.remove("hide");
    }
    else{console.log("Answers ended")
    ans0.classList.add("hide");
    ans1.classList.add("hide");
    ans2.classList.add("hide");
    ans3.classList.add("hide");
    //newPA.classList.add("hide");
    scoreDiv.classList.add("hide");

    var newForm=document.createElement("form");
    newForm.setAttribute("method","POST");
    answersS.appendChild(newForm);
    
    var inputNameDiv=document.createElement("div");
    inputNameDiv.setAttribute("class","input-group");
    newForm.appendChild(inputNameDiv);

    var inputLabel=document.createElement("input");
    inputLabel.setAttribute("type","text");
    inputLabel.setAttribute("name","name");
    inputLabel.setAttribute("id","initials");
    inputLabel.setAttribute("placeholder","Enter your initials here");
    inputNameDiv.appendChild(inputLabel);

    var submitBtnDiv=document.createElement("div");
    submitBtnDiv.setAttribute("class","input-group");
    newForm.appendChild(submitBtnDiv);

    var submitScore=document.createElement("button");
    submitScore.setAttribute("id","submitScoreBtn");
    submitScore.textContent="Submit";
    submitBtnDiv.appendChild(submitScore);

    var sendScore=document.querySelector("#submitScoreBtn");
    var initialsI=document.querySelector("#initials");

    sendScore.addEventListener("click", function(event) {
      event.preventDefault();
      console.log("sent");
      var userScore = {
        initials: initialsI.value.trim(),
        score: finalScore,
      };
      localStorage.setItem(initials,JSON.stringify(userScore));
      console.log("Data sent to local storage");
    });
    
  };

   /* for(var i=0; i<answersNumber; i++){
        document.getElementById("#i");
        var newP = document.createElement("button"); 
        newP.classList.add("btn-group-vertical","lead");
        newP.setAttribute("data-answer",i);
        newP.setAttribute("id","answered",i);
        newP.textContent=questionsArr[qNumber].answers[i].text;
        answersS.appendChild(newP);
    };*/
};

/*function nextQuestion(){
  nextQuestion++;


}*/

function correctAnswer(){
  resultS.innerHTML="";
  var newPA=document.createElement("p");
  newPA.classList="correct";
  newPA.textContent="Last answer: Correct!";
  resultS.appendChild(newPA);
}

function wrongAnswer(){
  resultS.innerHTML="";
  var newPA=document.createElement("p");
  newPA.classList="wrong";
  newPA.textContent="Last answer: Wrong =(";
  resultS.appendChild(newPA);
};

/*function nextButton(){
    var newSep2=document.createElement("hr");
    newSep2.setAttribute("class","my-4");
    answersS.appendChild(newSep2);
    var nextB =document.createElement("button");
    nextB.className="btn";
    nextB.setAttribute("id","next");
    nextB.textContent="Next question";
    answersS.appendChild(nextB);

    //qNumber++;
};*/
