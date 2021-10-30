import { useState, useEffect } from 'react';
import Axios from 'axios';

const axios = Axios.create({
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  },
});

const setFavorite = async (bookId, favorite) => {
  const response = await axios.post(`http://localhost:5000/book/${bookId}`, { favorite });
  return response.data.favorite;
};

const getFavorite = async (bookId) => {
  try {
    const response = await axios.get(`http://localhost:5000/book/${bookId}`);
    return response.data.favorite;
  } catch (e) {
    return false;
  }
};

const useBookFavorite = (bookId) => {
  const [isFavorite, setBookFavorite] = useState(false);

  useEffect(() => {
    if (bookId) {
      const fetchFavorite = async () => setBookFavorite(await getFavorite(bookId));
      fetchFavorite();
    }
  }, [bookId]);

  const toggleFavorite = async () => {
    setBookFavorite(await setFavorite(bookId, !isFavorite));
  };

  return { isFavorite, toggleFavorite };
};

export default useBookFavorite;
