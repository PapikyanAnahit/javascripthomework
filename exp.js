// let age = 19;                         1
// let score = 65;
// if (age < 18) {
//     console.log("Not eligible due to age.");
// }else if (score < 70) {
//     console.log("Not eligible due to low entrance score.");
// }else if ((age >= 18) && (score >= 70)) {
//     console.log("eligible for admission");
// }


// let income = 50000;                             2
// let age = 60;
// let tax;
// if (income <= 10000) {
//     tax = 0;
// }else if (10000 < income < 50000) {
//     if (age < 60) {
//         tax = income * 10 / 100;    
//     } else {
//         tax = income * 8 / 100;
//     }
// }else if (income >= 50000) {
//     if (age < 60) {
//         tax = income * 20 / 100;    
//     } else {
//         tax = income * 15 / 100;
//     }
// }
// console.log(tax)


// let a = 1;                                3
// let b = 2;
// let c = 3;

// if ((a + b > c) && (a + c > b) && (b + c > a)) {
//     if ((c ** 2 === a ** 2 + b ** 2) || (a ** 2 === b ** 2 + c ** 2) || (b ** 2 === a ** 2 + c ** 2)) {
//         console.log("Right triangle");
//     } else if (a === b && b === c && a === c) {
//         console.log("Equilateral triangle");
//     } else if ((a === b) || (a === c) || (b === c)) {
//         console.log("Isosceles triangle");
//     } else if ((a !== b) && (a !== c) && (b !== c)) {
//         console.log("Scalene triangle");
//     }
// } else {
//     console.log("Not a triangle");
// }


// process.stdin.once("data", input => {                 4                   
//     let number = parseInt(input); 
//     if (number > 0) {
//         if (number % 2 === 0) {
//             console.log("The number is positive and even");
//         } else {
//             console.log("The number is positive and odd");
//         }
//     } else if (number < 0) {
//         if (Math.abs(number) < 10000) {
//             console.log("The number is negative and its absolute value is less than 10,000");
//         } else {
//             console.log("The number is negative and its absolute value is 10,000 or more");
//         }
//     } else if (number === 0) {
//         console.log("The number is zero.");
//     }
//     process.exit();  
// });


// let temperature = 15;                                      5
// let time_of_the_day_m = "morning";

// if (temperature < 10) {
//     if (time_of_the_day_m === "morning") {
//         console.log("suggest wearing a heavy jacket and scarf");
//     } else if (time_of_the_day_e === "evening") {
//         console.log("suggest a warm coat and gloves.");
//     }
// } else if (temperature >= 10 && temperature <= 20) {
//     if (time_of_the_day_m === "morning") {
//         console.log("suggest a light sweater");
//     } else if (time_of_the_day_e === "evening") {
//         console.log("suggest a jacket.");
//     }
// } else if (temperature > 20) {
//     if (time_of_the_day_m === "morning") {
//         console.log("suggest wearing comfortable clothing");
//     } else if (time_of_the_day_e === "evening") {
//         console.log("suggest a light shirt");
//     }
// }
