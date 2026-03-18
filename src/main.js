import './style.css';
import { createFavoriteSection } from './sections/FavoritesSection';
import { createMainSection } from './sections/MainSection';
import { fetchBooks } from '/src/api/booksApi.js';
import { renderBooks } from './features/renderBooks';
import { createBookCard } from './components/BookCard';
import { createFavoriteCard } from './components/FavoritesCard';
import { storageService } from './services/storageService';
import { renderMessage } from './features/renderMessage';

const app = document.querySelector('#app');

let currentBooks = [];

const refreshUI = () => {
  const favorites = storageService.getFavorites();
  const favoritesContainer = document.querySelector('.favorites-container');
  renderBooks(favorites, favoritesContainer, (book) =>
    createFavoriteCard(book)
  );

  if (currentBooks.length > 1) {
    renderBooks(currentBooks, booksContainer, (book) => createBookCard(book));
  }
};

window.addEventListener('favoritesUpdated', refreshUI);

const onSearch = async (query) => {
  if (!query) {
    renderMessage(booksContainer, 'Please enter a search query');
    return;
  }

  try {
    renderMessage(booksContainer, 'Loading...');

    const books = await fetchBooks(query);

    if (books.length === 0) {
      renderMessage(booksContainer, 'No books found');
      return;
    }

    currentBooks = books;
    refreshUI();
  } catch (error) {
    console.error('Error fetching data:', error.message);
    renderMessage(booksContainer, 'Error fetching data');
  }
};

const { section: mainSection, booksContainer } = createMainSection(onSearch);
const favoritesSection = createFavoriteSection();

app.append(mainSection, favoritesSection);

refreshUI();

const initialBooks = await fetchBooks('bio');
currentBooks = initialBooks;
refreshUI();
