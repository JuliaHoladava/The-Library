import { debounce } from '../utils/debounce';
import './searchForm.css';

export const createSearchForm = (onSearch) => {
  const searchContainer = document.createElement('div');
  searchContainer.classList.add('search-container');

  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'search';
  input.id = 'search-field';
  input.classList.add('search-input');

  const button = document.createElement('button');
  button.classList.add('search-button');
  button.textContent = 'Search';

  const debounceSearch = debounce(onSearch, 500);
  input.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    debounceSearch(query);
  });

  button.addEventListener('click', () => {
    const query = input.value.trim();
    if (query) {
      onSearch(query);
    } else {
      alert('Please enter a search query.');
    }
  });

  searchContainer.appendChild(input);
  searchContainer.appendChild(button);

  return searchContainer;
};
