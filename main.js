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

    const title = document.createElement('span');
    title.classList.add('title');
    title.textContent = `Title: ${book.title}`;

    const author = document.createElement('span');
    author.classList.add('author');
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement('span');
    pages.classList.add('pages');
    pages.textContent = `Pages: ${book.pages}`;

    const read = document.createElement('span');
    read.classList.add('read');
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    label.append(input);
    const text = document.createTextNode('Read');
    label.appendChild(text);
    read.append(label);

    const remove = document.createElement('button');
    remove.classList.add('remove');
    remove.textContent = 'Remove';

    card.append(title, author, pages, read, remove);

    const cardGroup = document.querySelector('.card-group');
    cardGroup.append(card);
  }
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkein', '356', true);
addBookToLibrary('LOTR', 'J.R.R. Tolkein', '456', false);
displayBook(myLibrary);
console.log(myLibrary);