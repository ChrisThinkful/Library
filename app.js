let myLibrary = [];

function Book(title, author, numPages, read){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.status = read;
}

function addBookToLibrary(book){
    myLibrary.push(book)
}


function libraryDisplay(myLibrary){
    
}