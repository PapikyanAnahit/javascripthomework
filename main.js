/*  1․ Express the factorial of the input number
process.stdin.once('data', input => {                      
    let number = parseInt(input); 
    let factorial = 1;
    let i = 1;
    
    while (i <= number) {
        factorial *= i;
        i += 1;
    }
    
    console.log(factorial);  
    process.exit();  
});
*/

/*
process.stdin.once('data', input => {            
    let number = parseInt(input); 
    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    console.log(factorial);  
    process.exit();  
});
*/

/* 2.  Reverse the entered number
process.stdin.once('data', input => {                       
    let number = parseInt(input); 
    let reversed_number = 0;
    while (number != 0) {
        digit = number % 10
        reversed_number = reversed_number * 10 + digit
        number = Math.floor(number / 10)
    }
    console.log(reversed_number);  
    process.exit();  
});
*/

/*
process.stdin.once('data', input => {
    let number = parseInt(input); 
    let reversed_number = 0;

    for (; number; number = Math.floor(number / 10)) {
        reversed_number = reversed_number * 10 + (number % 10);  
    }
    console.log(reversed_number);  
    process.exit();  
});
*/
