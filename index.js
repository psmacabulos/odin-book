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
let myLibrary = [
  {
    title: 'The Odin',
    author: 'Patrick Macabulos',
    pageNo: 143,
    readTheBook: true,
  },
  {
    title: 'The Serpent',
    author: 'Patrick Macabulos',
    pageNo: 500,
    readTheBook: false,
  },
];

function addBookToLibrary() {}

/* Loop over the myLibrary array and display it */
const main = document.querySelector('main');

function createBooks(books) {
  return myLibrary.map(
    (book) => `
     <article class="card">
          <div class="box">
            <h3 class="title">${book.title}</h3>
            <p class="author">Patrick Macabulos</p>
            <p class="pages">153 pages</p>
            <button class="readingStatus">Finished Reading ?</button>
            <button class="delete">Delete Book</button>
          </div>
        </article>
  `
  );
}

main.innerHTML = createBooks(myLibrary);
