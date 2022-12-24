/* Create a book constructor */
function Book(title, author, pageNo, readTheBook = false) {
  this.title = title;
  this.author = author;
  this.pageNo = pageNo;
  this.readTheBook = readTheBook;
}

/* Create the info function inside the prototype */
Book.prototype.info = function () {
  let readStatus;
  this.readTheBook ? (readStatus = 'read') : (readStatus = 'not read');
  return `The ${this.title} by ${this.author}, ${this.pageNo} pages, ${readStatus} yet`;
};

let favBook = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(favBook.info());

/* Store user input of books into an array */
let myLibrary = [];
function addBookToLibrary() {}
