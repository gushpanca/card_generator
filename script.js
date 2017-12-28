// JavaScript File
var cardNumbers = ["1","2","3","4","5","6","7","8","9","10","J","Q","K","A"]
var cardSymbols = ["♠","♥","♦","♣"]

//var numbersLenght = cardNumbers.length
//var symbolsLenght = cardSymbols.length

var randomNumbers = Math.floor(Math.random() * cardNumbers.length);
var randomSymbols = Math.floor(Math.random() * cardSymbols.length);

document.getElementById("uper_symbol").innerHTML = cardSymbols[randomSymbols];
document.getElementById("card_number").innerHTML = cardNumbers[randomNumbers];
document.getElementById("lower_symbol").innerHTML = cardSymbols[randomSymbols];

if (cardNumbers[randomSymbols] == "♦"){
    document.getElementById("uper_symbol").style.color = "red";
}
    if (cardNumbers[randomSymbols] == "♦"){
        document.getElementById("lower_symbol").style.color = "red";
        }
        if (cardNumbers[randomSymbols] == "♥"){
            document.getElementById("uper_symbol").style.color = "red";
            }
            if (cardNumbers[randomSymbols] == "♥"){
                document.getElementById("uper_symbol").style.color = "red";
                }

                