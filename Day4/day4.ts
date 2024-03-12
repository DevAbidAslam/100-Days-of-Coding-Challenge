//Day4 of 100days of Coding Challenge

/* Question 10
Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.*/

//this program prints my favourite number 
//declare variable
let favourite_number :number = 15
//prints my favourite number in message
console.log(`my favourite number is ${favourite_number}`);

//this program prints Famous Quote
//declare name of author 
let famous_person: string = "Nelson Mandela";
let message: string = `${famous_person} once said, "The greatest glory in living lies not in never falling, but in rising every time we fall"` 
//print message
console.log(message);


/*Question 11
Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.*/
let Name :string[] = ["Abdullah","Adil","Ahmed","Bilal"];
for(let i = 0;i < Name.length;i ++){
    console.log(Name[i]);    
}

/*Question 12
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name. */

let Names :string[] = ["Abdullah","Adil","Ahmed","Bilal"];
for(let Names of Name){
    console.log(`Hey! ${Names} how are you?`);
}


