// process.stdin.once("data", input => {                              1        
//     let number = parseInt(input); 
//     if (number >= 18) {
//         console.log("Yor are elighible to vote!");
//     }else{
//         console.log("Yor aren't elighible to vote!");
//     }
//     process.exit();  
// });


// process.stdin.once("data", input => {               2                        
//     let number = parseInt(input); 
//     if (number % 2 === 0) {
//         console.log("Even");
//     }else{
//         console.log("Odd");
//     }
//     process.exit();  
// });


// process.stdin.once("data", input => {                       3                    
//     let number = parseInt(input);
//     if (number % 7 === 0) {
//         console.log(`${number} is divisible by 7`);
//     }else{
//         console.log(`${number} is not divisible by 7`);
//     }
//     process.exit();  
// });



// process.stdin.once("data", input => {                      4                      
//     let number = parseInt(input);
//     last_digit = number % 10;
//     if (last_digit % 3 === 0) {
//         console.log("The last digit is divisible by 3");
//     }else {
//         console.log("The last digit is not divisible by 3");
//     }
//     process.exit();  
// });

// process.stdin.once("data", input => {            5                   
//     let usage = parseInt(input);
//     let cost;
//     if (usage <= 100) {
//         cost = 0;  
//     } else if (usage <= 200) {
//         cost = (usage - 100) * 200;  
//     } else {
//         cost = (100 * 200) + (usage - 200) * 220;  
//     }
//     console.log(cost);
//     process.exit();  
// });


// process.stdin.once("data", input => {                 6                 
//     let number = parseInt(input);
//     if (number === 1) {
//         console.log("Sunday");
//     }else if (number === 2) {
//         console.log("Monday");
//     }else if (number === 3) {
//         console.log("Tuesday");
//     }else if (number === 4) {
//         console.log("Wednesday");
//     }else if (number === 5) {
//         console.log("Thursday");
//     }else if (number === 6) {
//         console.log("Friday");
//     }else if (number === 7) {
//         console.log("Saturday");
//     }else{
//         console.log("The week has 7 days.")
//     }
//     process.exit();  
// });


// age1 = Math.floor(Math.random() * 16)                7
// age2 = Math.floor(Math.random() * 16)
// age3 = Math.floor(Math.random() * 16) 
// age4 = Math.floor(Math.random() * 16)
// let smallestAge = Math.min(age1, age2, age3, age4);

// console.log("Generated ages:", age1, age2, age3, age4);
// console.log("The smallest age is:", smallestAge);