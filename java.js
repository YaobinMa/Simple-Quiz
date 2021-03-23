const quizBank = [
    {
        question: 'who is the first american president',
        a: 'george washington',
        b: 'elon musk',
        c: 'donald trump',
        d: 'lion king',
        correct: 'a'
    },
    {
        question: 'what lanaguage am i using',
        a: 'python',
        b: 'javascript',
        c: 'c++',
        d: 'c#',
        correct: 'b'
    },
    {
        question: 'what is 2+2',
        a: '0',
        b: '2',
        c: '4',
        d: '22',
        correct: 'c'
    },
    {
        question: 'how many hours there are in a day',
        a: '60',
        b: '25',
        c: '23',
        d: '24',
        correct: 'd'
    },
    {
        question: 'what are human most basic needs',
        a: 'food and water',
        b: 'phones',
        c: 'transportation',
        d: 'all the above',
        correct: 'd'
    },

]

const question = document.querySelector('.question')
const a = document.getElementById('a-text')
const b = document.getElementById('b-text')
const c = document.getElementById('c-text')
const d = document.getElementById('d-text')
const submit = document.querySelector('.submit')
const inputs = document.getElementsByName('choices')
const container = document.querySelector('.container')
submit.addEventListener('click', mainProgram)

var currentQuiz = 0;
var score = 0;

function mainProgram(){
    let answer = getAnswer()
    if(answer != 'holder'){
        updateScore()
        deSelect()
        currentQuiz++
        if(currentQuiz<quizBank.length){
            updateQuestion()
            console.log(currentQuiz)
            console.log(quizBank.length)
        }else{
            showScore()
    }
    }
}

updateQuestion()

function updateQuestion(){
    question.innerText = quizBank[currentQuiz].question
    a.innerText = quizBank[currentQuiz].a
    b.innerText = quizBank[currentQuiz].b
    c.innerText = quizBank[currentQuiz].c
    d.innerText = quizBank[currentQuiz].d  
}

function deSelect(){
    inputs.forEach(input =>{
        if(input.checked){
            input.checked=false
        }
    }) 
}

function getAnswer(){
    let userAnswer = 'holder'

    inputs.forEach(input =>{
        if(input.checked){ 
            userAnswer = input.id    
        }
    })
    return userAnswer 
}

function updateScore(){
    let answer = getAnswer()
    if(answer == quizBank[currentQuiz].correct){
        score++
    }
    console.log(score)
}

function showScore(){
    let result = `
    <h1 class='question'> ${score} out of 5 are correct! </h1>
    <button onclick = location.reload()> Restart </button>
    `
    container.innerHTML = result

}