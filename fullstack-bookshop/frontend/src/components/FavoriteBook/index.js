import styled from 'styled-components';
import useBookFavorite from '../../hooks/useBookFavorite';

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
  const { isFavorite, toggleFavorite } = useBookFavorite(bookId);

  if (!bookId) return null;

  return (
    <>
      <FavoriteButton
        onClick={() => toggleFavorite()}
        title={isFavorite ? 'Click to unmark as favorite' : 'Click to mark this book as favorite'}
      >
        {isFavorite ? '⭐️ Favorite' : 'Mark as favorite'}
      </FavoriteButton>
    </>
  );
};

export default FavoriteBook;
