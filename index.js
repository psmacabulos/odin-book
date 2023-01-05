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
  let booksLibrary = '';
  books.map(
    (book, index) =>
      (booksLibrary += `<article class="card">
          <div class="box">
            <h3 class="title">${book.title}</h3>
            <p class="author">${book.author}</p>
            <p class="pages">${book.pageNo}</p>
            <button class=${
              book.readTheBook ? 'readingStatusYes' : 'readingStatusNo'
            }>${
        book.readTheBook ? 'Finished Reading' : 'Not Finished Reading'
      }</button>
            <button class="delete">Delete Book</button>
          </div>
      </article>`)
  );
  main.innerHTML = booksLibrary;

  /* Add script to delete button */

  const delBtn = document.querySelectorAll('.delete');

  delBtn.forEach((del) => {
    del.addEventListener('click', () => {
      del.parentElement.parentElement.style.display = 'none';
    });
  });
}

createBooks(myLibrary);

/* Open the modal */
const openModal = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const submit = document.querySelector('#submit');

openModal.addEventListener('click', () => {
  modal.showModal();
});

/* Submit the form */
const form = document.querySelector('form');
form.addEventListener('submit', () => {
  const optionStatus = document.querySelector('#readYes:checked');
  myLibrary = [
    ...myLibrary,
    Array.from(
      document.querySelectorAll('form .input-box .details input')
    ).reduce(
      (acc, input) => ({
        ...acc,
        [input.id]: input.value,
      }),
      {}
    ),
  ];
  myLibrary[myLibrary.length - 1].readTheBook =
    optionStatus != null ? true : false;
  createBooks(myLibrary);
});
