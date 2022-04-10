// library array and book constructor
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// DOM elements for adding a book

const addBookBtn = document.querySelector('#addBookBtn')
const modal = document.querySelector('.modal')
addBookBtn.onclick = () => modal.style.display = 'block';

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// create the book from Form data and push book to myLibrary
function addBookToLibrary() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('input[name="read-status"]:checked').value;

  const newBook = new Book(title, author, pages, read)

  myLibrary.push(newBook)
  setData();
}

// add the book, render the display of books
const form = document.getElementById('book-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
  render();
  resetForm();
})

// clear the form after submitting
function resetForm() {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const pages = document.querySelector('#pages');

  title.value = '';
  author.value = '';
  pages.value = '';
}

// build the bookCard 
function createBook(book) {
  const booksDiv = document.querySelector('.books');

  const bookCard = document.createElement('div');
  booksDiv.appendChild(bookCard).classList.add('book-card');

  const bookTitle = document.createElement('h3');
  bookTitle.textContent = `"${book.title}"`
  bookCard.appendChild(bookTitle).classList.add('book-title');

  const bookAuthor = document.createElement('p');
  bookAuthor.textContent = `By: ${book.author}`;
  bookCard.appendChild(bookAuthor).classList.add('book-author');
  
  const bookPages = document.createElement('p');
  bookPages.textContent = `${book.pages} pages`;
  bookCard.appendChild(bookPages).classList.add('book-pages');
  
  // button to toggle read status
  const bookRead = document.createElement('button');
  bookRead.textContent = `${book.read}`
  bookCard.appendChild(bookRead).classList.add('read-btn');

  bookRead.addEventListener('click', () => {
    console.log(bookRead.textContent)
    bookRead.textContent = (bookRead.textContent == 'Read') ? 'Unread' : 'Read';
    setData();
  })

  // button to delete each item; removes from display and myLibrary
  const bookDel = document.createElement('button');
  bookDel.textContent = 'Delete Book';
  bookCard.appendChild(bookDel).classList.add('.del-btn');

  bookDel.addEventListener('click', () => {
    myLibrary.splice(myLibrary.indexOf(book),1);
    render();
    setData();
  })
}

// create the display for each book
function render() {
  const display = document.querySelector('.books');
  const bookItem = document.querySelectorAll('.book-card')
  bookItem.forEach(book => display.removeChild(book))

  for (let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i]);
  }
}

// store/update myLibrary in localstorage

function setData() {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

// pull from localstorage, if it exists

function restore() {
  if(!localStorage.myLibrary) {
    render()
  } else {
    let objects = localStorage.getItem('myLibrary')
    objects = JSON.parse(objects);
    myLibrary = objects;
    render();
  }
}

restore();
