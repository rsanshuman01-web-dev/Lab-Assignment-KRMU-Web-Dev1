const quizQuestions = [
    { question: "What is the capital of France?", answer: "paris" },
    { question: "What programming language runs in web browsers?", answer: "javascript" },
    { question: "What is 5 multiplied by 6?", answer: "30" },
    { question: "Which method converts a string to lowercase?", answer: "tolowercase" },
    { question: "Which keyword declares a block-scoped variable?", answer: "let" },
    { question: "HTML stands for HyperText Markup Language. Yes or no?", answer: "yes" },
    { question: "Which operator is used for strict equality?", answer: "===" },
    { question: "How many days are there in a leap year?", answer: "366" }
];

function normalize(input) {
    if (input === null) return null;
    return input.toLowerCase().trim();
}

function isCorrect(userInput, correctAnswer) {
    if (userInput === null) return false;
    return userInput === normalize(correctAnswer);
}

function runQuiz() {
    let score = 0;
    const total = quizQuestions.length;

    alert("Welcome to the Quiz! Answer the following questions.");

    for (let i = 0; i < total; i++) {
        const q = quizQuestions[i];
        let userInput = prompt("Q" + (i + 1) + ": " + q.question);

        if (userInput === null) {
            const quit = confirm("Do you want to quit the quiz?");
            if (quit) {
                alert("Your score: " + score + " / " + total);
                return;
            } else {
                userInput = prompt("Please answer the question: " + q.question);
            }
        }

        userInput = normalize(userInput);

        if (isCorrect(userInput, q.answer)) {
            score++;
            alert("Correct!");
        } else {
            alert("Wrong! Correct answer: " + q.answer);
        }
    }

    alert("Quiz complete! Final score: " + score + " / " + total);
}

runQuiz();
