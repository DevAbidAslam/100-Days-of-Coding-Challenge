/*Question 16
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.*/
let guests :string[] = ["Ahsan","Abdullah","Adil","Ahmed"]
console.log("Great news I found a bigger table");

guests.unshift("Osama");
guests.splice(3,0, "Zahid")
guests.push("Iqbal")

guests.forEach(guest => {
    console.log(`${guest} Would you like to join me for dinner?`);
    
});

/*Question 17
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.*/

console.log("Unfortunately! i can invite only two peeps");

while(guests.length >2){
   let removedGuest = guests.pop();
    console.log(`sorry ${removedGuest} i can't invite you guys`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest} you are still invited for dinner`);
});


/*Question 18
Seeing the World: Think of at least five places in the world you’d like to visit. Store the locations in a array. sort array in reverse and alphabatical order*/

let places :string[] =["New Zeeland","China","Turkey","Germany","Saudi Arabia"];
console.log("Original order:", places);
console.log("Alphabatical order:", [...places].sort());
console.log("Original order:", places);
console.log("Reverse Alphabatical order:", [...places].sort().reverse());
console.log("Original order:", places);

places.reverse()
console.log("Reverse Order:" , places);

places.reverse()
console.log("Original Order:", places);

places.sort()
console.log("Alphabatical Order:", places);

places.reverse()
console.log("Reverse Alphabatical Order:", places);