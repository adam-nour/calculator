    
        function createMathExpression(firstNum, secondNum, operator) {
            let num1 = parseFloat(firstNum);
            let num2 = parseFloat(secondNum);
            let result;
        
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                default:
                    return { result: null, expression: "Invalid operator" };
            }
        
            let mathExpression = `${firstNum} ${operator} ${secondNum} = `;
            return { result: result, expression: mathExpression };
        }
        
        
        
        function updateDisplay() {
            let display = document.getElementById('display');
            display.value = firstNumber;
        }
        function updateDisplaySecondNumber() {
            let display = document.getElementById('display');
            display.value = secondNumber;
        }
        function updateDisplayOperator() {
            let display = document.getElementById('display');
            display.value = operator;
        }
        
        
        function backspace() {
            if (firstNumber.length > 0 && secondNumber.length <= 0 && operator.length <=0 ) {
                firstNumber = firstNumber.slice(0, -1); // Remove the last character
                updateDisplay(); // Update the displayed expression
            }
            else if (secondNumber.length > 0) {
                secondNumber = secondNumber.slice(0, -1); // Remove the last character
                updateDisplaySecondNumber(); // Update the displayed expression
            }
            else if (operator.length > 0) {
                operator = operator.slice(0, -1); // Remove the last character
                updateDisplayOperator(); // Update the displayed expression
            }
            
        }
        
        
        
        
        
        
        
        
        
            //   const btnac = document.querySelector(".btnac");
            //   btnac.addEventListener("click", () => addNumber("rock"));
        
            //   const btnequal = document.querySelector(".btnequal");
            //   btnequal.addEventListener("click", () => calculate());
        
            //   const btndel = document.querySelector(".btndel");
            //   btndel.addEventListener("click", () => addNumber(""));
        
            //   const btn1 = document.querySelector(".btn1");
            //   btn1.addEventListener("click", () => addNumber("1"));
        
            //   const btn2 = document.querySelector(".btn2");
            //   btn2.addEventListener("click", () => addNumber("2"));
        
            //   const btn3 = document.querySelector(".btn3");
            //   btn3.addEventListener("click", () => addNumber("3"));
        
            //   const btn4 = document.querySelector(".btn4");
            //   btn4.addEventListener("click", () => addNumber("4"));
        
            //   const btn5 = document.querySelector(".btn5");
            //   btn5.addEventListener("click", () => addNumber("5"));
        
            //   const btn6 = document.querySelector(".btn6");
            //   btn6.addEventListener("click", () => addNumber("6"));
        
            //   const btn7 = document.querySelector(".btn7");
            //   btn7.addEventListener("click", () => addNumber("7"));
        
            //   const btn8 = document.querySelector(".btn8");
            //   btn8.addEventListener("click", () => addNumber("8"));    
              
            //   const btn9 = document.querySelector(".btn9");
            //   btn9.addEventListener("click", () => addNumber("9"));
        
            //   const btn0 = document.querySelector(".btn0");
            //   btn0.addEventListener("click", () => addNumber("0"));
              
             
        
            //   const btnmul = document.querySelector(".btnmul");
            //   btnmul.addEventListener("click", () => addOperator("*"));
        
            //   const btndiv = document.querySelector(".btndiv");
            //   btndiv.addEventListener("click", () => addOperator("/")); 
        
            //   const btnadd = document.querySelector(".btnadd");
            //   btnadd.addEventListener("click", () => addOperator("+")); 
        
            //   const btnsub = document.querySelector(".btnsub");
            //   btnsub.addEventListener("click", () => addOperator("-"));     
              
              
            //   const calbody = document.querySelector(".calbody");
        
        
            //   const container = document.querySelector(".container");
        
        
                firstNumber= '';
                secondNumber ='';
                operator = '';
        
                function calculate() {
            if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
                let { result, expression } = createMathExpression(firstNumber, secondNumber, operator);
                let outputDiv = document.getElementById("outputDiv");
                function updateDisplayResult() {
            let display = document.getElementById('display');
            display.value = result;
        }
                outputDiv.textContent = expression;
                outputDivResult.textContent = result;
                updateDisplayOperator();
                console.log(result); 
               
        
                // Output: result as a number
                // Reset variables for next calculation
                firstNumber = result;
                secondNumber = '';
                operator = op;
            }
        }
            function clearOutput(){
                firstNumber ='';
                secondNumber='';
                operator='';
                outputDiv.textContent = '.';
                outputDivResult.textContent = '0';
                display.value=''
            }
        
                function addNumber(number) {
            if (operator === '') {
                firstNumber += number;
                // outputDiv.textContent = firstNumber;
                updateDisplay();
            } else {
                secondNumber += number;
               
                // outputDiv.textContent = secondNumber; 
                updateDisplaySecondNumber();
            }
        }
        function addOperator(op) {
            if (firstNumber !== '' && secondNumber === '') {
                operator = op;
                
                // outputDiv.textContent = op;
                
                updateDisplayOperator();
            }else if(firstNumber !== '' && secondNumber !== ''){
                operator = op;
                calculate();
                
            }
        }
        
        
            //     function add(firstNumber,secondNumber){
            //         return firstNumber + secondNumber;
        
            //     }
            //     function subtract(firstNumber,secondNumber){
            //         return firstNumber-secondNumber;
        
            //     }
            //     function multiply(firstNumber,secondNumber){
            //         return firstNumber*secondNumber;
        
            //     }
            //     function divide(firstNumber,secondNumber){
            //         return firstNumber/secondNumber;
        
            //     }
        
            //    function operate(operator,firstNumber,secondNumber){
            //     if(operator[0]){
            //         return add(firstNumber,secondNumber);
            //     }else if(operator[1]){
            //         return subtract(firstNumber,secondNumber);
            //     }else if(operator[2]){
            //         return multiply(firstNumber,secondNumber);
            //     }else if(operator[3]){
            //         return divide(firstNumber,secondNumber);
            //     }else{
            //         return "ERROR";
            //     }
        
            //    }