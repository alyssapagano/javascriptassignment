var firstNumber = 10
var secondNumber = 2

var addition = firstNumber + secondNumber
var multiplication = firstNumber * secondNumber
var division = firstNumber / secondNumber
var subtraction = firstNumber - secondNumber


document.getElementById("addition").innerHTML= "This is what happens when you add " + firstNumber + " to " + secondNumber + "...wait for it..." + addition + ". BAM!";
document.getElementById("addition").style.color = "blue";

document.getElementById("multiplication").innerHTML= "This is what happens when you multiply " + firstNumber + " with " + secondNumber + "...wait for it..." + multiplication + ". BOOYA!";
document.getElementById("multiplication").style.color = "purple";

document.getElementById('division').innerHTML= "This is what happens when you divide " + firstNumber + " by " + secondNumber + "...wait for it..." + division + ". WATCH OUT!";
document.getElementById("division").style.color = "green";

document.getElementById('subtraction').innerHTML= "This is what happens when you subtract " + secondNumber + " from " + firstNumber + "...wait for it..." + subtraction + ". DAMN RIGHT!";
document.getElementById("subtraction").style.color = "orange";


