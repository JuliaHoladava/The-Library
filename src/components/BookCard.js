import './bookCard.css';
import { storageService } from '/src/services/storageService';

export const createBookCard = (book) => {
  const template = document.getElementById('book-card-template');
  const cardClone = template.content.cloneNode(true);

  const favoriteButton = cardClone.querySelector('.favorite-button');

  if (storageService.isFavorite(book.title)) {
    favoriteButton.classList.add('active');
  }

  favoriteButton.addEventListener('click', (e) => {
    e.stopPropagation();
    const isAdded = storageService.toggleFavorite(book);
    favoriteButton.classList.toggle('active', isAdded);
  });

  const coverImg = cardClone.querySelector('.book-cover');
  coverImg.src = `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`;
  coverImg.alt = `Cover of ${book.title}`;

  const titleElement = cardClone.querySelector('.book-title');
  titleElement.textContent = book.title;

  const authorElement = cardClone.querySelector('.book-author');
  authorElement.textContent = book.author;

  const yearElement = cardClone.querySelector('.book-year');
  yearElement.textContent = book.firstPublishYear;

  return cardClone;
};
