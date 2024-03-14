/*Question 13
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */
var transportation = ["Honda Civic", "Fortuner", "Rolls Royce"];
for (var i = 0; i < transportation.length; i++) {
    console.log("I love to drive ".concat(transportation[i]));
}
/*Question 14
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
var guests = ["Ahsan", "Abdullah", "Adil", "Ahmed"];
guests.forEach(function (guest) {
    console.log("".concat(guest, " Would you like to join me for dinner?"));
});
// Question 15
var UnableToAttend = "Ahmed";
console.log("".concat(UnableToAttend, " can't make a dinner."));
// Replace guest
var newGuest = "Zahid";
guests[guests.indexOf(UnableToAttend)] = newGuest;
// new Invitation
guests.forEach(function (guest) {
    console.log("".concat(guest, " Would you like to join me for dinner?"));
});
