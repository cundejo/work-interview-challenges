const axios = require('axios');

const saveFavoriteBook = async (bookId, favorite) => {
  await axios.put(`https://jsonbase.com/oliversosacano_favorite_books_bucket/${bookId}`, {favorite});
  return {[bookId]: favorite};
}

const getFavoriteBook = async (bookId) => {
  try{
    const response = await axios.get(`https://jsonbase.com/oliversosacano_favorite_books_bucket/${bookId}`);
    console.log(response.data)
    return response.data.data;
  } catch (e) {
    console.log(e)
  }

}

module.exports = {
  saveFavoriteBook,
  getFavoriteBook
}
