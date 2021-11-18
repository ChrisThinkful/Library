class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}


const readBtn = document.querySelectorAll('[data-read-button]')
const newBookBtn = document.querySelector('[data-add-book]')
const submitBtn = document.querySelector('[data-submit-button]')
const myTable = document.querySelector('#table')
const modal = document.getElementById("form-popup");
const close = document.getElementById("close");
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const readStatus = document.getElementById('status');
const table = document.createElement('table');

// myLibrary needs to be the array of books
let myLibrary = [];

let headers = ['Title', 'Author', 'Number of Pages', 'Read/Unread', 'Change']

// headings for the table
function headerDisplay() {
    let headerRow = document.createElement('tr');
    
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    myTable.appendChild(table);
}
headerDisplay();

// the display for books added to myLibrary
function libraryDisplay() {
    myLibrary.forEach(item => {
        let row = document.createElement('tr');
        let remove = document.createElement('td');
        remove.innerText = 'Remove'

        Object.values(item).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        row.appendChild(remove)
        table.appendChild(row);
    });
    myTable.appendChild(table);
}


// New Book button opens form to create a new book
newBookBtn.onclick = () => {
    modal.style.display = "flex";
}

// creates a new book
submitBtn.onclick = (e) => {
    e.preventDefault();
    myLibrary.push(new Book(title.value, author.value, pages.value, readStatus.value));
    libraryDisplay(myLibrary);
    title.value = '';
    author.value = '';
    pages.value = '';
}

// closes the modal
close.onclick = (event)  => {
    event.preventDefault();
    modal.style.display = "none";
}

// clicking outside of the modal also closes it
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}