console.log("lab calculator!")

//display:
const display = document.querySelector(".display")


//operator buttons:
const clearBtn = document.querySelector("#clear")
const equalBtn = document.querySelector("#equal")
const backBtn = document.querySelector("#back")

//functions and variables:
let equation=[]

//oneBtn.addEventListener("click", function () {equation.push(oneBtn.innerText)})
//twoBtn.addEventListener("click", () => {equation.push(twoBtn.innerText)})
//threeBtn.addEventListener("click", () => {equation.push(threeBtn.innerText)})

clearBtn.addEventListener("click", clearFunc)
backBtn.addEventListener("click", () => {equation.pop();display.innerHTML = 0})

const numberDisplay = (event) => {
  //document.querySelector("#disPlay").innerHTML = ""
  if (event.target.id.includes("num")) {
    const [, nmbr] = event.target.id.split('--');
    document.querySelector("#disPlay").innerHTML += nmbr;
    equation.push(nmbr);
  } else if (event.target.id.includes("op")) {
    const [, opr] = event.target.id.split('--');
    document.querySelector("#disPlay").innerHTML = opr;
    equation.push(opr);
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
