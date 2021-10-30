const axios = require('axios');

const saveFavoriteBook = async (bookId, favorite) => {
  await axios.put(`https://jsonbase.com/oliversosacano_favorite_books_bucket/${bookId}`, { favorite });
  return { favorite };
};

const getFavoriteBook = async (bookId) => {
  try {
    const response = await axios.get(`https://jsonbase.com/oliversosacano_favorite_books_bucket/${bookId}`);
    return response.data;
  } catch (e) {
    return undefined;
  }
};

module.exports = {
  saveFavoriteBook,
  getFavoriteBook,
};
