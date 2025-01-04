let gameNumber = 45;
let userNumber = prompt("Guess the game number: ");
while (userNumber != gameNumber){
    userNumber = prompt("You entered wrong number. Guess again: ");
}
console.log("Congratulations. You entered right number.");