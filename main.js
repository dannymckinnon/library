let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// prototype function for book read/unread checkbox
Book.prototype.toggleRead = function() {
  this.read ? this.read = false : this.read = true;
  console.log(this.read);
};


function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  console.log(myLibrary);
}

function displayBook(library) {
  const cardGroup = document.querySelector('.card-group');
  cardGroup.innerHTML = '';

  for (let i = 0; i < library.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-index', i);

    const title = document.createElement('span');
    title.classList.add('title');
    title.textContent = `Title: ${library[i].title}`;

    const author = document.createElement('span');
    author.classList.add('author');
    author.textContent = `Author: ${library[i].author}`;

    const pages = document.createElement('span');
    pages.classList.add('pages');
    pages.textContent = `Pages: ${library[i].pages}`;

    const read = document.createElement('span');
    read.classList.add('read');
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    label.append(input);
    const text = document.createTextNode('Read');
    label.appendChild(text);
    read.append(label);
    input.checked = library[i].read;

    // change read property in object on click of read button
    input.addEventListener('click', library[i].toggleRead);

    const remove = document.createElement('button');
    remove.classList.add('remove');
    remove.textContent = 'Remove';

    // remove book on button press
    remove.addEventListener('click', () => {
      myLibrary.splice(i, 1);
      displayBook(myLibrary);
    })

    card.append(title, author, pages, read, remove);
    
    cardGroup.append(card);
  }
}


// display modal when Add book button is clicked
const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const close = document.getElementsByClassName('close')[0];

btn.onclick = function() {
  modal.style.display = 'block';
}

close.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// collect book data when submit button pressed and add to library
let submit = document.querySelector('.submit');

submit.addEventListener('click', () => {
  let title = document.querySelector('#title');
  let author = document.querySelector('#author');
  let pages = document.querySelector('#pages');
  let read = document.querySelector('#read');

  addBookToLibrary(title.value, author.value, pages.value, read.checked);
  displayBook(myLibrary);
  modal.style.display = 'none';

  title.value = '';
  author.value = '';
  pages.value = '';
  read.checked = false;
});

