const display =document.querySelector(".display");
const buttons =document.querySelectorAll("button");
const specialChars = ["%", "*","/","-","+","="]
let output = "";
//Function to calculate based on button clicked
const calculate = (btnValue) => {
    if(btnValue === "=" && output !== ""){
        //If output has '%', replace with '/100' before evaluating
        output = eval(output.replace("%", "/100"));
    } else if (btnValue ==="AC"){
        output ="";
    }
    else  if (btnValue === "DEL"){
        //If DEL button is clicked, remove the last character from the outptu
        output =output.toString().slice(0, -1);
    }
    else {
        //If output is empty and button is specialChars then return
        if(output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    
   display.value =output;
};


//Add event listener to button, call calculate()
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});