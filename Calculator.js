// Calculator
function calculator( num1, num2, operator){
   
    var result;
    switch (operator) {

     case "+":
            result=num1+num2;
            break;
      case "-":
        result=num1-num2;
        break;

      case "*":
        result=num1*num2;
        break;

      case "/":
            result=num1/num2;
            break;
        default:
        console.log("Invalid Operator ")
        break;
    }
    console.log("result:" + result);
}

calculator(10,5,"+");
calculator(10,5,"-");
calculator(10,5,"*");
calculator(10,5,"/");