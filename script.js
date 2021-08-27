var rangeStart;
var rangeEnd;
var randomNumber;

function AutoGuess(){
    rangeStart = document.getElementById('startNumb').value;
    rangeEnd = document.getElementById('endNumb').value;
    randomNumber = parseInt(Math.round(Math.random() * (rangeEnd - rangeStart) + rangeStart)) + parseInt(rangeStart);

    // temp
        console.log(rangeStart);
        console.log(rangeEnd);
        console.log(randomNumber);
    //
}