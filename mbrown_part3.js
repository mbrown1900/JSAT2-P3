//JSAT2 Part 3
//Author: Mathew Brown

// B3.2: Define Strings
let myString = "This is a string";
let anotherString = "   Another string";
let hello = "Hello there!";
let myName = "Mathew";

console.log("myString:", myString);
console.log("anotherString:", anotherString);
console.log("hello:", hello);
console.log("myName:", myName);

// B3.3: String Length

console.log("Length of myString:", myString.length);
console.log("First character:", myString.charAt(0));
// 0 is beginning so 11=10th position
console.log("11th character:", myString.charAt(10));

//B3.4: Slice and Substrings

// Slices position 5-9
console.log("slice:", myString.slice(5, 9));
// Substrings from position 6-9
console.log("substring:", anotherString.substring(6, 9));

//B3.5: Upper and lower case

//display name in upper case
console.log(`myName in upper case: ${myName.toUpperCase()}`);
//display name in lower case
console.log(`myName in lower case: ${myName.toLowerCase()}`);

//B3.6: Concat, trim, replace and split 

// Using concat method to connect strings
console.log(`concat: ${hello.concat(" ", myName)}`);
// Using trim method to remove spaces
console.log(`trim: "${anotherString.trim()}"`);
// Using replace method to replace with a "  "
console.log(`replace: ${myString.replace("is a", " ")}`);
// Using split method to create an array of words
console.log("split:", myString.split(" "));
