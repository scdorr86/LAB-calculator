console.log("lab calculator!")

//display:
const display = document.querySelector(".display")

//number buttons:
const oneBtn = document.querySelector("#one")
const twoBtn = document.querySelector("#two")
const threeBtn = document.querySelector("#three")
const fourBtn = document.querySelector("#four")
const fiveBtn = document.querySelector("#five")
const sixBtn = document.querySelector("#six")
const sevenBtn = document.querySelector("#seven")
const eightBtn = document.querySelector("#eight")
const nineBtn = document.querySelector("#nine")

//operator buttons:
const clearBtn = document.querySelector("#clear")
const minusBtn = document.querySelector("#minus")
const plusBtn = document.querySelector("#plus")
const multiplyBtn = document.querySelector("#multiply")
const divideBtn = document.querySelector("#divide")
const equalBtn = document.querySelector("#equal")
const backBtn = document.querySelector("#back")

//functions and variables:
let equation=[]

//oneBtn.addEventListener("click", function () {equation.push(oneBtn.innerText)})
//twoBtn.addEventListener("click", () => {equation.push(twoBtn.innerText)})
//threeBtn.addEventListener("click", () => {equation.push(threeBtn.innerText)})
//fourBtn.addEventListener("click", () => {equation.push(fourBtn.innerText)})
//fiveBtn.addEventListener("click", function () {equation.push(fiveBtn.innerText)})
//sixBtn.addEventListener("click", () => {equation.push(sixBtn.innerText)})
//sevenBtn.addEventListener("click", () => {equation.push(sevenBtn.innerText)})
//eightBtn.addEventListener("click", () => {equation.push(eightBtn.innerText)})
//nineBtn.addEventListener("click", () => {equation.push(nineBtn.innerText)})
clearBtn.addEventListener("click", clearFunc)
backBtn.addEventListener("click", () => {equation.pop();display.innerHTML = 0})

const numberDisplay = (event) => {
  //document.querySelector("#disPlay").innerHTML = ""
  if (event.target.id.includes("num")) {
    const [, nmbr] = event.target.id.split('--')
    console.log(nmbr)
    document.querySelector("#disPlay").innerHTML += nmbr
  }
}

function renderFunc() {
  console.log('hello') 
}

function clearFunc() {
  equation=[]
}



console.log(equation)

document.querySelector('#main').addEventListener('click', numberDisplay)
