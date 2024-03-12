//Day4 of 100days of Coding Challenge
/* Question 10
Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.*/
//this program prints my favourite number 
//declare variable
var favourite_number = 15;
//prints my favourite number in message
console.log("my favourite number is ".concat(favourite_number));
//this program prints Famous Quote
//declare name of author 
var famous_person = "Nelson Mandela";
var message = "".concat(famous_person, " once said, \"The greatest glory in living lies not in never falling, but in rising every time we fall\"");
//print message
console.log(message);
/*Question 11
Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.*/
var Name = ["Abdullah", "Adil", "Ahmed", "Bilal"];
for (var i = 0; i < Name.length; i++) {
    console.log(Name[i]);
}
/*Question 12
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name. */
var Names = ["Abdullah", "Adil", "Ahmed", "Bilal"];
for (var _i = 0, Name_1 = Name; _i < Name_1.length; _i++) {
    var Names_1 = Name_1[_i];
    console.log("Hey! ".concat(Names_1, " how are you?"));
}
