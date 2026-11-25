//JSATS Part 3 - Write File
//Author: Mathew Brown

//Step 1: Bringing in fs module for file handling
const fs = require("fs");

//Step 2: Set file name
let fileName = "output.txt";

//Step 3: Create the string of text
let textToSave = "Hello, my name is Mathew. This text was saved by programming wizardry.";

//Step 4: Write the String to file and display any errors
try {
  fs.writeFileSync(fileName, textToSave);
  console.log("File saved: " + fileName);
} catch (error) {
  console.log("Could not save the file: " + error.message);
}

