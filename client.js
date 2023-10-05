const word = "Pepper";
let number = 5;

//render originals to html
document.getElementById("original-number").innerHTML = number;
document.getElementById("original-string").innerHTML = word;

//add 2 deimcal places
number=number.toFixed(2);
document.getElementById("add-decimal").innerHTML = number

//convert number to string
number= number.toString();
document.getElementById("string-num").innerHTML = number;

//check if number is a integer
document.getElementById("check-is-integer").innerHTML = Number.isInteger(number);

//show length of string
document.getElementById("word-length").innerHTML = word.length;

//show first character in word
document.getElementById("first-letter").innerHTML = word.charAt(0);

//substring 1-4
document.getElementById("part-word").innerHTML = word.substring(1,4)

