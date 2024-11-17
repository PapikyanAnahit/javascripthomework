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

/* 3․ Enter a number and according to that number the program will output multiples of 7
process.stdin.once('data', input => {                      
    let number = parseInt(input); 
    let count = 0;
    let multiple = 7;
    while (count < number) {
    console.log(multiple)
    multiple += 7
    count += 1
    }
    process.exit();  
});

/*
process.stdin.once('data', input => {
    let number = parseInt(input); 
    let multiple = 7;
    for (let count = 0; count < number; count++) {
        console.log(multiple); 
        multiple += 7;  
    }
    process.exit();  
});
*/

/* 4. Write a program that will print the sum of all odd numbers between 0 and that number․
process.stdin.once('data', input => {                           
    let number = parseInt(input); 
    let count = 1;
    let sum = 0;
    while (count <= number) {
        if (count % 2 !== 0) {
            sum += count; 
        }
        count += 2;  
    }
    console.log(sum);  
    process.exit();  
});
*/

/*
process.stdin.once('data', input => {
    let number = parseInt(input); 
    let sum = 0;
    for (let count = 1; count <= number; count += 2) {
        sum += count;  
    }
    console.log(sum);  
    process.exit();  
});
*/

/* 5. Write the program that will draw the following image according to the number of imported rows and columns
process.stdin.once('data', input => {                               
    let number = parseInt(input); 
    let row = 1;

    while (row <= number) {
        let col = 1;
        while (col <= number) {
            process.stdout.write('* ');
            col += 1;
        }
        console.log(); 
        row += 1;
    }
    process.exit();  
});
*/

/*
process.stdin.once('data', input => {
    let number = parseInt(input);
    for (let row = 1; row <= number; row++) {
        for (let col = 1; col <= number; col++) {
            process.stdout.write('* ');
        }
        console.log(); 
    }
    process.exit();
});
*/



