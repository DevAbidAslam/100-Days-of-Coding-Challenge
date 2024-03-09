//Day 1 of 100days of Coding Challenge

//Question 2
/*Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”*/

let Name: string = "Abid";
console.log(`Hello ${Name}, would you like to learn some TypeScript today?`);

//Question 3
/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/

let person_name:string = "Muhammad Abid"
console.log(`Uppercase:${person_name.toUpperCase()}`);
console.log(`Lowercase:${person_name.toLowerCase()}`);
console.log(person_name.charAt(0).toUpperCase() +person_name.slice(1,8).toLowerCase()+ person_name.charAt(9).toUpperCase() +person_name.slice(10,13).toLowerCase());


