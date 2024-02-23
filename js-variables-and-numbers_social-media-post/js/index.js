console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--

const title = "my first post";
const mediaText = "This is my message";
let likes = 498;
const author = "Steffen";
const isReported = true;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log("title: ", title);
console.log("Text: ", mediaText);
console.log("number of likes", likes);
console.log("writen by: ", author);
console.log("reported?", isReported);

likes++;
console.log("new number of likes", likes);

// --^-- write your code here --^--
