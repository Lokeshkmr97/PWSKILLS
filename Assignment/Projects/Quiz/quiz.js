const questions = [
    {
        question: "1.) What is the preferred way for adding a background color in HTML?",
        options: ["a.) <body background='yellow'>", "b.) <background>yellow</background>", "c.) < body style='background-color:yellow'>", "d.) <background color='yellow'>text<background>"],
        correctAnswer: "c.) < body style='background-color:yellow'>"
    },
    {
        question: "2.) What is the correct HTML for creating a hyperlink?",
        options: ["a.) <a name=''>A</a>", "b.) <a>B</a>", "c.) <a href='http://www.example.com'>example</a>", "d.) <a url='http://www.example.com'>example</a>"],
        correctAnswer: "c.) <a href='http://www.example.com'>example</a>"
    },
    {
        question: "3.) Which of the following JavaScript cannot do?",
        options: ["a.) JavaScript can react to events", "b.) JavaScript can manipulate HTML elements", "c.) JavaScript can be use to validate data", "d.) All of the Above"],
        correctAnswer: "d.) All of the Above"
    },
    {
        question: "4.) _________ keyword is used to declare variables in javascript.",
        options: ["a.) Var", "b.) Dim", "c.) String", "d.) None of the above"],
        correctAnswer: "a.) Var"
    },
    {
        question: "5.) Which type of JavaScript language is _________",
        options: ["a.) Object-Oriented", "b.) Object-Based", "c.) Assembly-language", "d.) High-level"],
        correctAnswer: "b.) Object-Based"
    },
    {
        question: "6.) In JavaScript, what is a block of statement?",
        options: ["a.) Conditional block", "b.) block that combines a number of statements into a single compound statement", "c.) both conditional block and a single statement", "d.) block that contains a single statement"],
        correctAnswer: "b.) block that combines a number of statements into a single compound statement"
    },
    {
        question: "7.) The 'function' and 'var' are known as:",
        options: ["a.) Keywords", "b.) Data types", "c.) Declaration statements", "d.) Prototypes"],
        correctAnswer: "a.) Keywords"
    },
    {
        question: "8.) CSS stands for : ",
        options: ["a.) Cascade style sheets", "b.) Color and style sheets", "c.) Cascading style sheets", "d.) None of the above"],
        correctAnswer: "c.) Cascading style sheets"
    },
    {
        question: "9.) The property in CSS used to change the background color of an element is -",
        options: ["a.) bgcolor", "b.) color", "c.) background-color", "d.) All of the above"],
        correctAnswer: "c.) background-color"
    },
    {
        question: "10.) How can you open a link in a new browser window?",
        options: ['a.) <a href="url" new>', 'b.) <a href="url" target="new">', 'c.) <a href="url" target="_blank">', 'd.) <a href="url" target="">'],
        correctAnswer: 'c.) <a href="url" target="_blank">'
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const restartButton = document.getElementById("restart-btn");

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.classList.add("option-btn","grid", "py-2", "px-4", "hover:bg-gray-100","hover:text-black");
        optionButton.textContent = option;

        optionButton.addEventListener("click", () => checkAnswer(option));

        optionsElement.appendChild(optionButton);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
        resultElement.textContent = "Correct!";
        resultElement.classList.remove("text-red-500");
        resultElement.classList.add("text-green-500");
    } else {
        resultElement.textContent = "Incorrect!";
        resultElement.classList.remove("text-green-500");
        resultElement.classList.add("text-red-500");
    }

    markCorrectAnswer(currentQuestion.correctAnswer);
    nextButton.classList.remove("hidden");
    restartButton.classList.add("hidden");
}

function markCorrectAnswer(correctAnswer) {
    const optionButtons = document.querySelectorAll(".option-btn");
    optionButtons.forEach(button => {
        if (button.textContent === correctAnswer) {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
        button.disabled = true;
    });
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
        resultElement.textContent = "";
        // nextButton.classList.add("hidden");
        restartButton.classList.add("hidden");
        
    
    }else {
        nextButton.classList.add("hidden");
        showResult();
        
    }
}

function showResult() {
    questionElement.textContent = `Quiz Completed! Your Score: ${score} out of ${questions.length}`;
    optionsElement.innerHTML = "";
    resultElement.textContent = "";
    restartButton.classList.remove("hidden");
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
    resultElement.textContent = "";
    nextButton.classList.remove("hidden");
    restartButton.classList.add("hidden");
}

nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);

showQuestion();