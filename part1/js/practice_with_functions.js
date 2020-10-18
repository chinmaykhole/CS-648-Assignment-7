function halfNumber(number){
    return number/2;
}

function squareNumber(number){
    return number*number;
}

function percentOf(num1,num2){
    return (num1/num2)*100;
}

function findModulus(num1, num2){
    return num2%num1;
}

function sumNumbers(numbers) {
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result += Number(numbers[i]);
    }
    return result;
}

//1
var number = 50;
console.log('Half of the'+number+'='+halfNumber(number));

//2
var number = 2;
console.log("Square of" + number + " is " + squareNumber(number));

//3
var num1 = 2;
var num2 = 4;
console.log(num1 + " is " + percentOf(2, 4) + "% of " + num2);

//4
var num1 = 4;
var num2 = 10;
console.log("Value of modulus is" + findModulus(num1, num2));

//5
var input = prompt("Enter a list of comma seperated integers");
var numbers = input.split(',');
console.log("Total is" + sumNumbers(numbers));

