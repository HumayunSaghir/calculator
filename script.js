// Target your elements
let resultField = document.querySelector('.resultField')
let ac = document.querySelector('.ac')
let del = document.querySelector('.del')
let percentage = document.querySelector('.percentage')
let slash = document.querySelector('.slash')
let seven = document.querySelector('.seven')
let eight = document.querySelector('.eight')
let nine = document.querySelector('.nine')
let multiply = document.querySelector('.multiply')
let four = document.querySelector('.four')
let five = document.querySelector('.five')
let six = document.querySelector('.six')
let minus = document.querySelector('.minus')
let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let plus = document.querySelector('.plus')
let zero = document.querySelector('.zero')
let dot = document.querySelector('.dot')
let equal = document.querySelector('.equal')

// Core Functionalities

// Main Expression String
let expression = ''


// Add event listners on number buttons.
let allNumberButtons = document.querySelectorAll('.numberButton')

allNumberButtons.forEach( (item) => {
    console.log(item.addEventListener('click', (e) => {
        expression += item.innerText
        console.log(expression)
    }))
} )

// Adding event loops on operation buttons.
// let allOperations = document.querySelectorAll('.operation')
// allOperations.forEach( (item) => {
//     item.addEventListener('click', (e) => {
//         expression += item.innerText
//         console.log(expression)
//     })
// } )

// Adding functionality of ac button
ac.addEventListener('click', (e) => {
    expression = ""
    resultField.innerText = ""
})

// Functionality of calculation the result.
equal.addEventListener('click', () => {
    let result = undefined
    try{
        result = eval(expression)
        resultField.innerText = result
    }
    catch{
        resultField.innerText = "Invalid Input"
    }
})