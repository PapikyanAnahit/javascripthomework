// function my_abs(number) {                                   1
//     if (number > 0) {
//         return number
//     } else {
//         return number * -1;
//     }
// }
// console.log(my_abs(-5))

// function my_bin(number) {                         2
//     let result = "";
//     while (number > 0) {
//         result += number % 2;
//         number = Math.floor(number / 2)
//     }
//     return result 
// }
// console.log(my_bin(15))

// function printPascalTriangle(n) {                 3
//     for (let i = 0; i < n; i++) {
//         let row = ''; 
//         row += ' '.repeat(n - i);
//         let c = 1;
//         for (let j = 0; j <= i; j++) {
//             row += c + ' '; 
//             c = (c * (i - j)) / (j + 1); 
//         }

//         console.log(row); 
//     }
// }
// printPascalTriangle(5);


    
// function calc(exp) {                               4
//     let operator = "";
//     let left = "";
//     let right = "";
    
//     for (let i = 0; i < exp.length; i++) {
//         if ("+-*/".includes(exp[i])) { 
//             operator = exp[i];
//             left = exp.slice(0, i);  
//             right = exp.slice(i + 1);  
//             break;
//         }
//     }
//     left = parseFloat(left);
//     right = parseFloat(right);

//     if (operator === "+") {
//         return add(left, right);
//     } else if (operator === "-") {
//         return sub(left, right);
//     } else if (operator === "/") {
//         return div(left, right);
//     } else if (operator === "*") {
//         return mult(left, right);
//     } else {
//         return "Invalid operator";
//     }
// }

// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// function div(a, b) {
//     if (b === 0) {
//         return "Number can't divide 0";
//     } else {
//         return a / b;
//     }
// }

// function mult(a, b) {
//     return a * b;
// }

// console.log(calc("5 / 2"));
// console.log(calc("3 * 3"));

// function countConsVowel(sentence) {                      5
//     let countConsonant = 0;
//     let countVowel = 0;
//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];
//         if ("AEIOUaeiou".includes(char)) {
//             countVowel++;
//         } else if ("BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz".includes(char)) {
//             countConsonant++;
//         }
//     }
//     return { countConsonant, countVowel };
// }
// console.log(countConsVowel("Hello world"));    


// function reverse_number(number) {                6
//     let reversed_number = 0;
//     while (number != 0) {
//         let digit = number % 10;
//         reversed_number = reversed_number * 10 + digit;
//         number = Math.floor(number / 10)
//     }
//     return reversed_number;
// };
// console.log(reverse_number(156)); 


// function* my_range(...args) {                   7
//     let start, end, step;

//     if (args.length === 1) {
//         start = 0;
//         end = args[0];
//         step = 1;
//     } else if (args.length === 2) {
//         start = args[0];
//         end = args[1];
//         step = 1;
//     } else if (args.length === 3) {
//         start = args[0];
//         end = args[1];
//         step = args[2];
//     } else {
//         console.error("Error");
//         return;
//     }

//     if (step === 0) {
//         console.error("Error");
//         return;
//     }

//     let current = start;

//     if (step > 0) {
//         while (current < end) {
//             yield current;
//             current += step;
//         }
//     } else {
//         while (current > end) {
//             yield current;
//             current += step;
//         }
//     }
// }

// for (let num of my_range(1, 6)) {
//     console.log(num);
// }





// function myFilter(func, items) {                   9
//     let result = [];
//     for (let el of items) {
//         if (func(el)) {
//             result.push(el);
//         }
//     }
//     return result;
// }
// console.log(myFilter(x => x % 2 === 0, [1, 2, 3, 4])); 

// function myMap(func, items) {
//     let result = [];
//     for (let el of items) {
//         result.push(func(el));
//     }
//     return result;
// }
// console.log(myMap(x => x * 3, [1, 2, 3, 4]));
