export const renderBooks = (books, container, cardCreator) => {
  container.replaceChildren();

  books.forEach((book) => {
    const card = cardCreator(book);
    container.appendChild(card);
  });
};
