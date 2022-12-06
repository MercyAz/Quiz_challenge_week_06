// for (let index = 0; index < array.length; index++) {

// }
var currentQuestionIndex = 0;
var questionContainer = document.getElementById('questions-wrap')
var questionsEl = document.getElementById('question-title')
var questionChoices = document.getElementById('choices')
var QuestionList = Questions

function startQuestions() {
    questionsEl.innerText = Questions[currentQuestionIndex].question_title

    questionChoices.innerHTML =
    `<button>${Questions[currentQuestionIndex].Choices[0]}</button>
    <button>${Questions[currentQuestionIndex].Choices[1]}</button>
    <button> ${Questions[currentQuestionIndex].Choices[2]}</button>
    <button>${Questions[currentQuestionIndex].Choices[3]}</button>`
};
var ChoiceList = [`<button>${Questions[currentQuestionIndex].Choices[0]}</button>`,`
<button>${Questions[currentQuestionIndex].Choices[1]}</button>`, `
<button> ${Questions[currentQuestionIndex].Choices[2]}</button>`,`
<button>${Questions[currentQuestionIndex].Choices[3]}</button>`]

document.querySelector('.start').addEventListener('click', function () {
    startQuestions()
});

i = 0
for(var choice of ChoiceList) {
 choice.addEventListener('click', function () {startQuestions()}); choice[i++]};
// i = 0
// for (var options of ChoiceList) {
//     options.addEventListener ('click', function () {
//         startQuestions()
//     }
//     );
//     choices[i++]
// }

// });


//attach an eventlistener to all the lis, when they are clicked then you go on to the next question

localStorage.setItem ('color', 'red')