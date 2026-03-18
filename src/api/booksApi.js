export const fetchBooks = async (query) => {
  const LIMIT = 10;

  const response = await fetch(
    `https://openlibrary.org/search.json?q=${query}&limit=${LIMIT}`
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();

  return data.docs.map((book) => ({
    title: book.title || 'Unknown Title',
    author: book.author_name || 'Unknown Author',
    coverId: book.cover_i || null,
    firstPublishYear: book.first_publish_year || 'Unknown Year',
  }));
};
