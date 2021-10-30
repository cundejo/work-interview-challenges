import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  li > a {
    display: block;
    padding: 0.5rem;
  }
`;

const LoadMoreButton = styled(Button)`
  display: block;
  margin: 1rem auto;
`;

const BookList = ({ books, onLoadMore }) => {
  return (
    <div>
      <List>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </List>
      <LoadMoreButton onClick={onLoadMore}>Load more</LoadMoreButton>
    </div>
  );
};

export default BookList;
