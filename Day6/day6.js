var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*Question 16
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.*/
var guests = ["Ahsan", "Abdullah", "Adil", "Ahmed"];
console.log("Great news I found a bigger table");
guests.unshift("Osama");
guests.splice(3, 0, "Zahid");
guests.push("Iqbal");
guests.forEach(function (guest) {
    console.log("".concat(guest, " Would you like to join me for dinner?"));
});
/*Question 17
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.*/
console.log("Unfortunately! i can invite only two peeps");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("sorry ".concat(removedGuest, " i can't invite you guys"));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, " you are still invited for dinner"));
});
/*Question 18
Seeing the World: Think of at least five places in the world you’d like to visit. Store the locations in a array. sort array in reverse and alphabatical order*/
var places = ["New Zeeland", "China", "Turkey", "Germany", "Saudi Arabia"];
console.log("Original order:", places);
console.log("Alphabatical order:", __spreadArray([], places, true).sort());
console.log("Original order:", places);
console.log("Reverse Alphabatical order:", __spreadArray([], places, true).sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reverse Order:", places);
places.reverse();
console.log("Original Order:", places);
places.sort();
console.log("Alphabatical Order:", places);
places.reverse();
console.log("Reverse Alphabatical Order:", places);
