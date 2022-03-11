# Library
An extension of a 'Book' constructor to create a small library application

[Live Demo](https://christhinkful.github.io/Library/)
 
## To-Dos

- [x] Create a display for an array - myLibrary
- [x] New Book button - brings up a form/modal to add details of a book
- [x] On Submit, book should be added to myLibrary and displayed dynamically
- [X] Book's Read status should be toggleable within its cell
- [ ] Add ability to delete book(s)
        - a checkbox to enable deletion of multiple at once with a delete button somewhere on the page?
        - a delete button in a cell?
- [ ] Store the library, and added books, in local storage


## Issues

- When multiple books have been added, the "Read" button is no longer toggleable. I know that this is because I'm not querying ALL of the Read buttons, but when I do querySelectorAll('.read-button') and add an eventListener to each button, it breaks functionality. I will need to revisit this. 
