console.log("lab calculator!")

const oneBtn = document.getElementById("#one")
const numberBtns = document.querySelectorAll(".norm")
const operatorBtns = document.querySelectorAll(".operator")
const clearBtn = document.querySelector(".clear")
const equalBtn = document.querySelector(".equal")
const display = document.querySelector(".display")
const sevenBtn = document.querySelector("#seven")

console.log(clearBtn)

numberBtns.addEventListener("click", renderFunc)
clearBtn.addEventListener("click", calcFunc)
sevenBtn.addEventListener("click", renderFunc)
oneBtn.addEventListener("click", renderFunc)

function renderFunc () {
  console.log('hellos')
  display.innerHTML = sevenBtn.innerText
}

function calcFunc () {
 console.log('idk if this works')
}
