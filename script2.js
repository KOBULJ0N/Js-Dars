// Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.
// Examples

// insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"

// insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"

// insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"

/*     task №4    */
let stringCamelCase = 'myNameIsQobiljon';

let string = stringCamelCase.split(/(?=[A-Z])/).join(' ');

console.log(string);