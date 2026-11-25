//JSATS Part 3 - Read File
//Author: Mathew Brown

//Step 1: Bringing in fs module for file handling
const fs = require("fs");

//Step 2: Set file name to read
let fileName = "output.txt";

//Step 3: Reads file
fs.readFile(fileName, "utf8", function (error, fileText) {
  if (error) {
    console.log("Could not read the file: " + error.message);
    return;
  }
  console.log("Text read from " + fileName + ":");
  console.log(fileText);
});