//              nested for loops

// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`)
//     for (let j = 1; j <= 4; j++)
//         console.log(`   j is: ${j}`)
// }


//                  while loops

// let count = 1;
// while (count <= 10) {
//     console.log(count);
//     count++
// }

// const secret = "turnip";
// let guess = prompt("enter secret");

// while (guess != secret) {
//     guess = prompt("enter secret");
// }
// console.log("correct")


//           break
// let input = prompt("Say something!")
// while (true) {
//     input = prompt(input);
//     if (input === "stop") {
//         break;
//     }
// }
// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) {
//         break;
//     }
// }



//          guessing game
// let maxNumber = parseInt(prompt("Enter maximum number!"));
// while (!maxNumber) {
//     maxNumber = parseInt(prompt("Enter valid number!"));
// }
// const targetNumber = Math.floor(Math.random() * maxNumber) + 1;
// let attempts = 1;

// let guess = parseInt(prompt("Enter your first guess"));
// while (parseInt(guess) !== targetNumber) {
//     if (guess === "quit") {
//         break
//     }
//     attempts++
//     if (guess > targetNumber) {
//         guess = prompt("Too high! Guess again");
//     }
//     else {
//         guess = prompt("Too low! Guess again");
//     }
// }
// if (guess === "quit") {
//     console.log("You quit")
// }
// else {
//     console.log(`You win, it took you ${attempts} guesses`)
// }



//          for of loops
// const sounds = ["honk", "bang", "squelch", "thwack", "clonk"]

// for (let index of sounds) {
//     console.log(index);
// }

// for (let char of "string") {
//     console.log(char)
// }

//          iterating over an object will only iterate the keys. use key[iteration] to access values.
// let scores = {
//     john: 70,
//     mark: 40,
//     lewis: 10,
//     sarah: 80,
//     megan: 50,
//     edward: 99,
// }
// for (let i in scores) {
//     console.log(`${i} scored ${scores[i]}`)
// }

//          use Object.values() / Object.keys() to access and iterate through just the values, or just the keys in an object.
// let total = 0;
// for (let i of Object.values(scores)) {
//     total += i;
// }
// console.log(`Total score= ${total}`)

//      Scope
// let and const are both block scoped (not accessible outside of a block)
// var is not block scoped (old)
// closest version is used in a block, ie if a duplicate name is used, the one inside the block will be used

// nested functions have access to its parents variables (lexical scope)