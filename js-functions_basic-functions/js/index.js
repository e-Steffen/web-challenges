console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
const bookTitle = "der 100-Jährige, der aus dem Fenster sprang und verschwand";
const author = "Mensch Meyer";
let rating = 4;
let numberOfSales = 354;

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--
console.log(bookTitle);
console.log(author);
console.log(rating);
console.log(numberOfSales);

rating = 5;
numberOfSales++;

// console.log(bookTitle);
// console.log(author);
// console.log(rating);
// console.log(numberOfSales);

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--
function logBookData() {
  console.log(bookTitle);
  console.log(author);
  console.log(rating);
  console.log(numberOfSales);
  numberOfSales += 1;
  console.log(numberOfSales);
  numberOfSales += 1;
  console.log(numberOfSales);
}

logBookData();

// --^-- write your code here --^--
