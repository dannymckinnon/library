let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayBook(library) {
  for (const book of library) {
    const card = document.createElement('div');
    card.classList.add('card');
    const title = document.createTextNode(book.title);
    card.appendChild(title);
    const cardGroup = document.querySelector('.card-group');
    cardGroup.appendChild(card);
  }
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkein', '356', true);
displayBook(myLibrary);
console.log(myLibrary);