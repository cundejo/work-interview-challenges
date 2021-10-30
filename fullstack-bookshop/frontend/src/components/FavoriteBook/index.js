import Axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

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

const FavoriteButton = styled.button`
  background-color: lightgray;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: darkgray;
  }
`;

const FavoriteBook = ({ bookId }) => {
  const [isBookFavorite, setBookFavorite] = useState(false);

  useEffect(() => {
    const fetchFavorite = async () => setBookFavorite(await getFavorite(bookId));
    fetchFavorite();
  }, [bookId]);

  if (!bookId) return null;

  const toggleFavorite = async () => {
    setBookFavorite(await setFavorite(bookId, !isBookFavorite));
  };

  return (
    <>
      <FavoriteButton
        onClick={() => toggleFavorite()}
        title={isBookFavorite ? 'Click to unmark as favorite' : 'Click to mark this book as favorite'}
      >
        {isBookFavorite ? '⭐️ Favorite' : 'Mark as favorite'}
      </FavoriteButton>
    </>
  );
};

export default FavoriteBook;
