if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
};





// Variables
let newNumber = "0";
let savedNumber = "";
let result = "";
let operatorSelected = "";
let isOperatorSelected = false;




  // Clear
  function clearNumeral() {
    newNumber = "0";
    savedNumber = "";
    result = "";
    operatorSelected = "";
    isOperatorSelected = false;
    document.getElementById("numeral-display").textContent = newNumber;
  }
  

  // Numeral
  function numeral(data) {
  if (isOperatorSelected)
  {
    savedNumber = document.getElementById("numeral-display").textContent;
    newNumber = data;
    isOperatorSelected = false;
  }
  else if (newNumber == "0" && data != "." )
  {
    newNumber = data;
  }
  else if (newNumber != "0" && data != ".")
  {
    newNumber += data;
  }
  else if (data == ".")
  {
    if (newNumber.indexOf(".") < 0)
    {
      newNumber += data;
    }
  }
  else {
    document.getElementById("numeral-display").textContent = newNumber;
  }
  document.getElementById("numeral-display").textContent = newNumber;
  }


  // Modify
  function modify(data) {
    const checkNumber = document.getElementById("numeral-display").textContent;
    if (data == "+/-") {
      if (checkNumber.indexOf("-") >= 0) {
        newNumber = checkNumber.replace("-", "");
      }
      else {
        newNumber = "-" + checkNumber;
      }
    }
    else if (data == "%") {
        newNumber = Number(checkNumber) / 100;
        newNumber = String(newNumber);
    }
    document.getElementById("numeral-display").textContent = newNumber;
  }


  // Operator
  function operator(data) { 
    isOperatorSelected = true;
    switch (data) {
    case "+":
        operatorSelected = "+";
        break;
    case "-":
        operatorSelected = "-";
        break;
    case "X":
        operatorSelected = "X";
        break;
    case "/":
        operatorSelected = "/";
        break;
    default:
        break;
    }       
  }


  // Equal
  function equal() {
    if (operatorSelected == "+") {
      result = Number(savedNumber) + Number(newNumber);
    }
    else if (operatorSelected == "-") {
      result = Number(savedNumber) - Number(newNumber);
    }
    else if (operatorSelected == "X") {
      result = Number(savedNumber) * Number(newNumber);
    }
    else if (operatorSelected == "/") {
      result = Number(savedNumber) / Number(newNumber);
    }
    isOperatorSelected = false;
    operatorSelected = "";
    result = String(result);
    if (result.length > 10) {
      result = result.slice(0, 9)
    }
    document.getElementById("numeral-display").textContent = result;
  }
