const output = document.getElementById("output");

const playerOne = [170, 22];

let heightOne = playerOne [0];
let ageOne = playerOne [1];

const playerTwo = [168, 34];

let heightTwo = playerTwo [0];
let ageTwo = playerTwo [1];

let pointOne = heightOne * 5 + ageOne;

console.log(pointOne);

let pointTwo = heightTwo * 5 + ageTwo;

console.log(pointTwo);

function compare(){

    if (pointOne < pointTwo){
        compareResult = "Punkte: " + pointOne + " John";
    }
    else if (pointOne = pointTwo){
        compareResult = "Unentschieden"
    }else{
        compareResult = "Punkte: " + pointTwo +
        "Meike";
    }

    output.innerHTML = compareResult
}

