console.log("lab calculator!")

//get displays from the dom:
const display = document.querySelector("#display")
const results = document.querySelector(".result")

//Array.from puts the targeted html element collection into an array (in this case buttons)
//creating a variable that will be the array created using Array.from on our DOM elements with class button 
let buttons = Array.from(document.getElementsByClassName('button')) 
//console.log(buttons)

//add event listener to each button; .map creates a new array from original array
//in this case .map is creating a new array from the buttons array established above
//and creating that new array by iterating the buttons array index and attaching click event listener
// and then listening for the click
buttons.map(item => {
  item.addEventListener('click', (event) => {
      console.log('clicked');
      console.log(event);
      console.log(event.target);
      console.log(event.target.innerText);

      //switch statements takes an expression or event and evaluates it against a series of cases and 
      //executes what we tell it depending on what the case event that is happening; the default case will execute 
      //if no case is matches the event or expression passed into the switch function
      //the default below is adding the innerText to the display element on each click event
      //break statements keep other cases from happening if a previous case is executed
      switch(event.target.innerText) {
        case 'C':
          display.innerText = '';
          break;
        case '←':
          if(display.innerText){
            //.slice returns a copy of an array the parameters tell it where to start and end
            //in this case slice starts at index 0 of display array and returns new array less last index in it
            display.innerText = display.innerText.slice(0, -1);
          }
          break;
        case '=':
          //the eval function evaluates a string as an expression and returns a value
          results.innerText = eval(display.innerText)
          break;    
        default:
          display.innerText += event.target.innerText
      }
  });
})



//functions and variables:
//let equation=[]

//oneBtn.addEventListener("click", function () {equation.push(oneBtn.innerText)})
//twoBtn.addEventListener("click", () => {equation.push(twoBtn.innerText)})
//threeBtn.addEventListener("click", () => {equation.push(threeBtn.innerText)})

//clearBtn.addEventListener("click", clearFunc)
//backBtn.addEventListener("click", () => {equation.pop();display.innerHTML = 0})

/*const numberDisplay = (event) => {
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

document.querySelector('#main').addEventListener('click', numberDisplay)*/
