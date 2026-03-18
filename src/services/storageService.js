export const storageService = {
  key: 'favorites',

  getFavorites() {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  },

  toggleFavorite(book) {
    let favorites = this.getFavorites();
    const index = favorites.findIndex((b) => b.title === book.title);
    let isAdded;

    if (index === -1) {
      favorites.push(book);
      isAdded = true;
    } else {
      favorites.splice(index, 1);
      isAdded = false;
    }
    localStorage.setItem(this.key, JSON.stringify(favorites));

    window.dispatchEvent(
      new CustomEvent('favoritesUpdated', {
        detail: { book, isAdded },
      })
    );

    return isAdded;
  },

  isFavorite(title) {
    const favorites = this.getFavorites();
    return favorites.some((b) => b.title === title);
  },
};
