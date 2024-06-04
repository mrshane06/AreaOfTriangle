let input1 =  document.querySelector('#base')
let input2 =  document.querySelector('#height')
let button =  document.querySelector('button')
let answer =  document.querySelector('#answer')

button.addEventListener('click',()=>{
    answer.innerText = ('Answer: ' + (eval(`(1/2)*${base.value} * ${height.value}`).toFixed(2) +(' cm²')))
})