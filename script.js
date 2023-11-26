function createMathExpression(firstNum, secondNum, operator) {
  let num1 = parseFloat(firstNum);
  let num2 = parseFloat(secondNum);
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      return { result: null, expression: "Invalid operator" };
  }

  let mathExpression = `${firstNum} ${operator} ${secondNum} = `;
  return { result: result.toFixed(3).replace(/\.0+$/, ''), expression: mathExpression };
}

function updateDisplay() {
  let display = document.getElementById("display");
  display.value = firstNumber;
}
function updateDisplaySecondNumber() {
  let display = document.getElementById("display");
  display.value = secondNumber;
}
function updateDisplayOperator() {
  let display = document.getElementById("display");
  display.value = operator;
}

function backspace() {
  if (
    firstNumber.length > 0 &&
    secondNumber.length <= 0 &&
    operator.length <= 0
  ) {
    firstNumber = firstNumber.slice(0, -1);
    updateDisplay();
  } else if (secondNumber.length > 0) {
    secondNumber = secondNumber.slice(0, -1);
    updateDisplaySecondNumber();
  } else if (operator.length > 0) {
    operator = operator.slice(0, -1);
    updateDisplayOperator();
  }
}

firstNumber = "";
secondNumber = "";
operator = "";

function calculate() {
  if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
    let { result, expression } = createMathExpression(
      firstNumber,
      secondNumber,
      operator
    );
    let outputDiv = document.getElementById("outputDiv");
    function updateDisplayResult() {
      let display = document.getElementById("display");
      display.value = result;
    }
    outputDiv.textContent = expression;
    outputDivResult.textContent = result;
    updateDisplayOperator();
    console.log(result);

    firstNumber = result;
    secondNumber = "";
    operator = op;
  }
}
function clearOutput() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  outputDiv.textContent = "\u200B";
  outputDivResult.textContent = "0";
  display.value = "";
}

function addNumber(number) {
  if (operator === "") {
    firstNumber += number;
    updateDisplay();
  } else {
    secondNumber += number;

    updateDisplaySecondNumber();
  }
}
function addOperator(op) {
  if (firstNumber !== "" && secondNumber === "") {
    operator = op;

    updateDisplayOperator();
  } else if (firstNumber !== "" && secondNumber !== "") {
    operator = op;
    calculate();
  }
}
