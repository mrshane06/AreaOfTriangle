let input1 =  document.querySelector('#base')
let input2 =  document.querySelector('#height')
let button =  document.querySelector('button')
let answer =  document.querySelector('#answer')

button.addEventListener('click',()=>{
    answer.innerText = ('Answer: ' + (eval(`(1/2)*${base.value} * ${height.value}`).toFixed(2) +(' cm²'))) 
    //this multiplies the base , height by 0.5 to get the area
})