// // print number from 1 to 10 using a for loop 

// // for (i=0;i<=10;i++){
// //     console.log(i);
    
    
// // }


// // print number from 10 to 1 using a for loop 

// // for (i=10;i>=0;i--){
// //     console.log(i);
    
// // }




// // print number from 10 to 1 using a while loop

// // i = 10;

// // while(i>0){
// //     console.log(i);
// //     i--;
    
    
// // }


// // print even numbers from 1 to 20 using a for loop

// // for (i=0;i<=20;i++){
// //     if (i %2=== 0){
// //         console.log(`${i} is even`);
    
// //     }
// //     else if(i %2 != 0){
// //         console.log(`${i} it's odd`);
// //     }
   
// // }

// // print even numbers from 1 to 20 using a while loop

// // i=1;
// // while(i<=15 ){
// //     if(i %2 === 1){
// //     console.log(`${i} it is odd`);
    
// //     }
// //     else if(i %2 === 0){
// //         console.log(`${i} it is even`);
// //     }
// //     i++;

// // }

// // print the multiplication table of 5 

// // for (i=1;i<=10;i++){
// //     console.log(`5x${i}=${5*i}`);
    
    
// // }



// // Find the sum of number from 1 to 100 using a loop 
// let sum = 0;
// for (i = 1; i<=100; i++){
//     sum = sum + i
// }

// console.log(sum);


// Find the sum of even numbers from 1 to 50 using a loop.

// sum = 0;
// for(i=0;i<=50;i++){
//     if(i %2===0){
//         sum = sum +i;
//     }
// }
// console.log(sum);

// Find the sum of odd numbers from 1 to 50 using a loop.

// sum = 0;
// for(i=0;i<=50;i++){
//     if(i % 2 !=0){
//         sum = sum + i;

//     }
// }
// console.log(sum);



// Find the sum of multiples of 5 between 1 and 100.

// sum = 0;
// for(i=0;i<=100;i++){
//     if(i % 5 === 0){
//         sum = sum + i;

//     }
// }
// console.log(sum);



// PRINT ALL NUMBER BETWEEN 1 TO 50 THAT ARE DIVISIBLE BY 3


// for(i=0;i<=50;i++){
//     if(i % 3 === 0){
//        console.log(i);
        
//     }
// }


// ASK USER A NUMBER AND PRINT WHETHER EACH NUMBER FROM 1 TO THAT NUMBER IS EVEN OR ODD.
// EXAMPLE: 1 IS ODD, 2 IS EVEN

// let val = prompt("GIVE A NUMBER :")

// if(val % 2 === 0){
//     console.log(`${val} is even number`);
    
// }
// else if(val % 2 != 0){
//     console.log(`${val} is odd number`);
    
// }



// COUNT HOW MANY NUMBER ARE DIVISIBLE  BY BOTH 3 AND 5

// sum = 0;

// for(i=0;i<=100;i++){
//     if(i%3===0 && i%5===0){
//         sum = sum + i
//     }
// }

// console.log(sum);


// --------------------
// Q1: Stop at first Multiple of 7

// Write a loop from 1 to 100 that:
// -----Prints each number 
// -----Stops completely when it finds the first number divisible by 7 



// for (i = 1; i<=100; i++){
//     console.log(i); 
//     if(i %7 === 0){
//         break;
//     }
    
    
// }



// Q2: Skips Multiple of 3

// Write a loop from 1 to 20 that:
// -------- Skips number divisible by 3
// -------- Prints all other 

// Expeted output :
// 1 2 4 5 7 8 10 11 ... (no 3, 6, 9, etc)



// for (i=1; i<=20; i++){
   
//     if(i%3 === 0) continue; 
//     console.log(i);   

// }


// Q3: Print First 5 Odd Numbers Only

// Write a loop from 1 to 100 that:

// Prints only 5 odd numbers

// Then stops the loop

// Use both if, continue, and a counter + 

// break

// Expected output:

// // 13579

// let count = 0;

// for (i=1; i <=100;i++){
//     if(i%2===1 ){
//        count ++;
//        console.log(i);
       
        
//     }
//     if(count === 5){
//         break
//     }
    


// }


// 🔹 Q1: Stop at first Multiple of 4

// Write a loop from 1 to 50

// Print each number

// Stop completely when the first number divisible by 4 is found

// for (i = 1; i<=50; i++){
//     console.log(i);
//     if(i %4 === 0){
//         break
//     }
    
// }
 


// 🔹 Q2: Skip Multiples of 2

// Write a loop from 1 to 30

// Skip numbers divisible by 2

// Print all other numbers

// for (i = 1; i<=30;i++){
//     if(i%2 === 0){
//         continue
//     }
//     console.log(i);

// }


// 🔹 Q3: Print First 7 Even Numbers

// Write a loop from 1 to 100

// Print only the first 7 even numbers

// Use if, a counter, and break


// count = 0;

// for(i = 1; i<=100; i++){
//     if(i%2 === 0){
//         count ++ ;
        
//     }
//     if(i%2 === 1){
//         continue
//     }
//     console.log(i);
    
//     if(count === 7){
//         break
//     }
    
    

// }


// 🔹 Q4: Print Numbers Divisible by 3 but Skip 9

// Loop from 1 to 30

// Print numbers divisible by 3

// Skip the number 9 using continue

// for (i=1;i<=30;i++){
//  if(i === 9){
//     continue
//  }
//  else if(i%3 === 0 ){
//     console.log(i);
    

//  }

 
// }

// Q5: Count Numbers Divisible by 5

// Loop from 1 to 100

// Count how many numbers are divisible by 5

// Print only the count at the end

// count = 0;
// for (i = 1;i<=100;i++){
   
//     if (i%5 === 0){
//         count ++;
//     }
    
// }

// console.log("Total Count = " + count);


// Q6: Stop When Sum Exceeds 50

// Loop from 1 to 100

// Keep adding numbers to a sum variable

// Stop the loop using break when sum becomes greater than 50

// Print the sum

// sum =0;
// for (i=1;i<=100;i++){
//     console.log(i);
//     sum = sum  + i
//     if (sum >=50){
//         break
       
//     }
    
// }
//  console.log(`${sum} Your Reached the limit`);

// ------------------------------------------
// Date = 31/10/2025 (FUNCTION QUESTION'S)



// ✅ Function Declaration (normal function)

// Write a function greet() that prints "Hello JavaScript!".



// function greet(){
//     console.log("Hello JavaScript!");
    
// }

// greet();


// Q:2 - Write a function add(a, b) that returns the sum of two numbers.

// function add (a, b){
//     console.log(a+b);
    
// }
// add(100 , 100);



// Q:3 Write a function square(num) that returns the square of a number.


// function square (x1){
//     console.log(x1 ** 2);
    
// }
// square(100)



// Q:4 Write a function isEven(num) that returns true if a number is even, and false otherwise.

// function  isEven(num) {
//     if (num%2 === 0) {
//        return "It's is Even";
        
//     }
//     else{
//         return "It's is Odd";
        
//     }

// }

// console.log(isEven(20));




// Q:5 Write a function max(a, b) that returns the greater of two numbers.

// function max(a,b){
//     if(a > b){
//         return `${a} is greater than ${b} so a is greater then b`
//     }
//     else{
//         return `${b} is greater than ${a} so b is greater then a`
//     }
// }

// console.log(max(300,100));

                    // OR

// function max(a, b) {
//     return a > b ? a : b;
// }

// console.log(max(300, 100)); // Output: 300


