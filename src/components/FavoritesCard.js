import './favoritesCard.css';
import { storageService } from '/src/services/storageService';

export const createFavoriteCard = (book) => {
  const template = document.getElementById('favorites-card-template');
  const cardClone = template.content.cloneNode(true);

  const favoriteButton = cardClone.querySelector('.fav-button');

  if (storageService.isFavorite(book.title)) {
    favoriteButton.classList.add('active');
  }

  favoriteButton.addEventListener('click', (e) => {
    e.stopPropagation();
    const isAdded = storageService.toggleFavorite(book);
    favoriteButton.classList.toggle('active', isAdded);
  });

  const coverImg = cardClone.querySelector('.favorites-cover');
  coverImg.src = `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`;
  coverImg.alt = `Cover of ${book.title}`;

  const titleElement = cardClone.querySelector('.favorites-title');
  titleElement.textContent = book.title;

  const authorElement = cardClone.querySelector('.favorites-author');
  authorElement.textContent = book.author;

  const yearElement = cardClone.querySelector('.favorites-year');
  yearElement.textContent = book.firstPublishYear;

  return cardClone;
};
