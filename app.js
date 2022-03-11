// default library for shaping/styling purposes

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('input[name="read-status"]:checked').value;

  const newBook = new Book(title, author, pages, read)

  myLibrary.push(newBook)

  displayBooks(newBook)

  console.log(myLibrary)
}


function displayBooks(book) {
  const booksDiv = document.querySelector('.books');
    const bookCard = document.createElement('div');
    booksDiv.appendChild(bookCard).classList.add('book-card');

    const bookTitle = document.createElement('h3');
    bookTitle.innerHTML = `"${book.title}"`
    bookCard.appendChild(bookTitle).classList.add('book-title');

    const bookAuthor = document.createElement('p');
    bookAuthor.innerHTML = `By: ${book.author}`;
    bookCard.appendChild(bookAuthor).classList.add('book-author');

    const bookPages = document.createElement('p');
    bookPages.innerHTML = `${book.pages} pages`;
    bookCard.appendChild(bookPages).classList.add('book-pages');

    const bookRead = document.createElement('button');
    bookRead.innerHTML = `${book.read}`
    bookCard.appendChild(bookRead).classList.add('read-btn');


    // right now this works to toggle the read status, but it breaks once there's more than one book.
    const readBtn = document.querySelector('.read-btn');
    readBtn.addEventListener('click', () => {
    readBtn.innerHTML = (readBtn.innerHTML == 'Read') ? 'Unread' : 'Read';
    })
}


const form = document.getElementById('book-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
  resetForm();
})

function resetForm() {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const pages = document.querySelector('#pages');

  title.value = '';
  author.value = '';
  pages.value = '';
}

const modal = document.querySelector('.modal')
const addBookBtn = document.querySelector('#addBookBtn')
addBookBtn.onclick = () => modal.style.display = 'block';

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When a user visits the site, there will be a button to add a Book
// when they click that button, a modal will pop up where they can fill out a form
// Upon submitting that form, a book object should be created from that input data
// the book object should populate in the myLibrary
// each book should display as a card with title, author, pages, read status(toggleable), as well as a delete & edit buttons

// Secondary:
// add localstorage usage
