var questions = [
    {
        question: "Len Dawson was the Chiefs' QB who won the Super Bowl.",

        answer: true
    },
    {
        question: "Patrick Mahomes was the first MVP for the Chiefs",

        answer: true
    },
    {
        question: "Patrick Mahomes won the MVP last year as a rookie",

        answer: false
    },
    {
        question: "Clark Hunt is the original owner of the Chiefs",

        answer: false
    },
    {
        question: "The Chiefs Franchise started in Houston Texas",

        answer: true
    }
];

var questionIndex = 0;

funcion renderQuestion(){
    if (questionIndex <= (questions.length - 1)) {
        $("#question").innerHTML = questions[questionIndex].q;
    }
    else {
        $("#question").innerHTML = "Game Over";
    }
}

renderQuestion();

if (questionIndex === questions.length) {
    return;
  }
