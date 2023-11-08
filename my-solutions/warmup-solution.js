/*Objective:
Your task is to enter the Echo Room and listen to its sequence, then predict the next number it will echo.You have been provided with a series of numbers the room has echoed in the past.Use these numbers to determine the next one in the sequence.//
*/

function getNextNumber(sequence) {
    let difference = sequence[sequence.length - 1] - sequence[sequence.length - 2];
    let nextNumber = sequence[sequence.length - 1] + difference;
    return nextNumber;
}
//initialize the sequence
let sequence = [3, 6, 9, 12];
//predict the next number  in the sequence
console.log(getNextNumber(sequence));