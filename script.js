const startBtn = document.getElementById('start');
const quizBody = document.getElementById('quiz-body');
const quest = document.getElementById('quiz-question');
//const optEvent = document.getElementsByClassName('options');
//const choices = document.getElementById('container-option').children;
const nextBtn = document.getElementsByClassName('next-btn');
const opt1 = document.getElementById('opt-1');
const opt2 = document.getElementById('opt-2');
const opt3 = document.getElementById('opt-3');

startBtn.addEventListener('click', start)
function start() {
    startBtn.classList.add('hidden');
    quizBody.classList.remove('hidden');
    quizContent(counter);
}

/*function clickMe(option) {
    for (let i = 0; i < questions.length; i++) {
        if (counter == i && option.id == questions[i].answer) {
            option.classList.add('correct');
        } else {
            option.classList.remove('wrong');
        }
    }
    check();
}*/
let index = 0;
let question;
let option;
let counter = 0;
let questionIndex = 0;
let Score = 0;

function quizContent(index) {
    question = quest.innerHTML = questions[index].question;
    option = document.getElementById('opt-1').innerHTML = 'A. ' + questions[index].options[0];
    option = document.getElementById('opt-2').innerHTML = 'B. ' + questions[index].options[1];
    option = document.getElementById('opt-3').innerHTML = 'C. ' + questions[index].options[2];
}


let questions = [
    {
        question: 'Who created the Nigerian Council?',
        options: [
            'Federick Lugard',
            'Sir Creamer Thompson',
            'Sir Donald Cameron'
        ],
        answer: 0

    },
    {
        question: 'Which continent is the smallest in the world?',
        options: [
            'Australia',
            'Africa',
            'Europe'

        ],
        answer: 1
    },
    {
        question: 'What region was created by the facilitation of the NCNC?',
        options: [
            'Mid-West Region',
            'North Central',
            'South East Region'
        ],
        answer: 0
    },
    {
        question: 'Which African country first gained independence?',

        options: [
            'Liberia in 1847',
            'Ghana in 1965',
            'South Africa in 1975'
        ],
        answer: 2
    },
    {
        question: 'Who formed the first political Party in Nigeria',

        options: [
            'Herbert Macaulay',
            'Lord luggard',
            'Sir Hugh Clifford'
        ],
        answer: 2
    }





]


function clickMe(element) {
let optionContainer =  [...document.getElementsByClassName('option-container')];
for(let opt of optionContainer){
    if (opt.innerHTML == questions[index].answer){
        opt.style.color = "brown";
        opt.style.backgroundColor = "green";
    }// changing the background color of the right option to green

    
}
if (element.innerHTML == questions[index].answer){
    element.style.color = "brown";
    element.style.backgroundColor =  "green";
} else  {
    element.style.color = "brown";
    element.style.backgroundColor =  "red";
}
opt1.setAttribute ('onclick', '');
opt2.setAttribute ('onclick', '');
opt3.setAttribute ('onclick', '');

//nextBtn.removeAttribute('disabled');


}
nextBtn.addEventListener('click', function(e) {
nextBtn.setAttribute('disabled', 'disabled');
nextQuestion();

});

function nextQuestion (){

    opt1.setAttribute ('onclick', 'clickMe(this)');
    opt2.setAttribute ('onclick', 'clickMe(this)');
    opt3.setAttribute ('onclick', 'clickMe(this)');
    
    let optionContainer =  [...document.getElementsByClassName('option-container')];
    for(let opt of optionContainer){
     
            opt.style.color = "";
            opt.style.backgroundColor = "";
    
        
    }

    index++;
    questionIndex++;
    if ( questionIndex == questions.length){
        alert('Quizz is Completed Your Score ' +   Score);
        index = 0;
        questionIndex =  0;
        score = 0;
        score++;
    } 

}





//trying to verify if an option as been clicked before enabling the next button

// optEvent.addEventListener('click', )

