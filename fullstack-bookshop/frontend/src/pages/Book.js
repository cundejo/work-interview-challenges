import { Link, useParams } from 'react-router-dom';
import FavoriteBook from '../components/FavoriteBook';
import styled from 'styled-components';

const getBookImg = (book) => {
  return book.formats['image/jpeg'];
};

const BookNotFound = () => {
  return (
    <div>
      <div>
        <Link to={`/`}>← Go back to list of books</Link>
      </div>
      <div>Book not found</div>
    </div>
  );
};

const BookUi = styled.div`
  margin-top: 1rem;
  display: flex;

  aside {
    margin-right: 1rem;
    width: 20vw;
    text-align: center;
    img {
      border-radius: 5px;
      width: 20vw;
      margin-bottom: 1rem;
    }
  }

  article {
    h1 {
      font-size: 1.4rem;
      margin-top: 0;
    }
  }
`;

const Book = ({ books }) => {
  let { id } = useParams();

  const book = books.find((b) => b.id === Number(id));
  if (!book) <BookNotFound />;

  return (
    <div>
      <div>
        <Link to={`/`}>← Go back to list of books</Link>
      </div>

      <BookUi>
        <aside>
          <img src={getBookImg(book)} alt={`${book.title} Cover`} />
        </aside>
        <article>
          <h1>Title: {book.title}</h1>
          <p>Authors: {book.authors.map((author) => `${author.name}`)}</p>
          {book && <FavoriteBook bookId={book.id} />}
        </article>
      </BookUi>
    </div>
  );
};

export default Book;
