console.log("lab calculator!")

const display = document.querySelector(".display")
const oneBtn = document.querySelector("#one")
const twoBtn = document.querySelector("#two")
const threeBtn = document.querySelector("#three")
let arr=[]
oneBtn.addEventListener("click", function () {arr.push(oneBtn.innerHTML)})
twoBtn.addEventListener("click", renderFunc)


function renderFunc() {
  console.log('hello') 
}
console.log(arr)
console.log(arr)
