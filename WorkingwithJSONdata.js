// Analyses
// What to do? 

// Task 1. Parse JSON data into an array of book objects.
const books = 
`[{
    "title": "The Power of Now",
    "author": Eckhart Tolle"
    "pubishedYear": 1930,
    "price": 64.99,
},
{
    "title": "Gifted Hands"
    "author": "Ben Carson"
    "pubishedYear": 1901
    "price": "28.00"
}]`

JSON.parse(jsonData);

// Task 2. Calculate and log the total price of all the books.
// Use reduce to calculate the total price of all books
const totalPrice = books.reduce((total, book)=>total + book.Price, 0);
console.log(`Total Price of all books: ${totalPrice}`);

// Task 3. Filter the books published before the year 1960 and create a new array with these books.
// Use filter to create a new array (vintageBooks) containing books published before 1960. 
const vintageBooks = books.filter(book => book.publishedYear < 1960);

// Task 4. Sort the books by their published year in ascending order.
const sortedBooks = books .slice ().sort((a,b)=> a.publishedYear-b.publishedYear);
console.log(``)


