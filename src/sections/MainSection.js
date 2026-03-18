import './mainSection.css';
import { createSearchForm } from '/src/components/SearchForm';

export const createMainSection = (onSearch) => {
  const section = document.createElement('section');
  section.classList.add('results');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Discover Your Next Great Read';

  const paragraph = document.createElement('p');
  paragraph.classList.add('paragraph');
  paragraph.textContent =
    'Search millions of books, build your personal library, and never lose track of what to read next.';

  const searchContainer = createSearchForm(onSearch);

  const booksContainer = document.createElement('div');
  booksContainer.classList.add('books-container');

  section.append(title, paragraph, searchContainer, booksContainer);

  return { section, booksContainer };
};
