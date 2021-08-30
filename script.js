var rangeStart;
var rangeEnd;
var randomNumber;
var numberGuessed;

function AutoGuess(){
    // Creating Random Number
    rangeStart = document.getElementById('startNumb').value;
    rangeEnd = document.getElementById('endNumb').value;
    randomNumber = parseInt(Math.round(Math.random() * (rangeEnd - rangeStart) + rangeStart)) + parseInt(rangeStart);

    // temp
        console.log(`Range Start:${rangeStart}`);
        console.log(`Range End: ${rangeEnd}`);
        console.log(`Random Number: ${randomNumber}`);
        console.log(``);
    //

    // Display Random Number
    document.getElementById('randomNumbDisplay').innerHTML = `Random Number: ${randomNumber}`;
    
    while (numberGuessed !== randomNumber){
        numberGuessed = parseInt(Math.round(Math.random() * (rangeEnd - rangeStart) + rangeStart)) + parseInt(rangeStart);
        console.log(numberGuessed);
    }

    // temp
        console.log(`${numberGuessed}`);
        console.log(``);
    //
}