import './favoritesSection.css';

export const createFavoriteSection = () => {
  const section = document.createElement('section');
  section.classList.add('favorites');

  const title = document.createElement('h3');
  title.textContent = 'Favorites';
  title.classList.add('favorites-section-title');

  const line = document.createElement('hr');
  line.classList.add('favorites-line');

  const favoritesContainer = document.createElement('favorites-container');
  favoritesContainer.classList.add('favorites-container');

  section.append(title, line, favoritesContainer);

  return section;
};
