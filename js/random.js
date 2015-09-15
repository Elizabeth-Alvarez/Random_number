var number;
var textnode;
var counter = 0;
var minNumber = document.getElementById("begin").value;
var maxNumber = document.getElementById("end").value;

  function random(low, high) {
    var min = low;
    var max = high;
    var adjustedHigh = max - min + 1;
    number = Math.floor((Math.random()* adjustedHigh) + parseFloat(min));
    return number;
  }

  function number() {
    var minNumber = document.getElementById("begin").value;
    var maxNumber = document.getElementById("end").value;
    document.getElementById("display").innerHTML=random(minNumber,maxNumber);
  }

  function numberGuess() {
    var guess = document.getElementById("guess_num").value;

    if (guess != number) {
      textnode = document.getElementById("append").innerHTML = " "
      textnode = document.createTextNode("WRONG!!!");
      document.getElementById("append").appendChild(textnode);
      counter ++;
    }
    else {
      textnode = document.getElementById("append").innerHTML = " "
      counter ++;
      textnode = document.createTextNode("You guessed the correct number and it took you " + counter + " tries to guess correctly");
      document.getElementById("append").appendChild(textnode);
    }
  }
