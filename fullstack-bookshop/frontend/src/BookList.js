import { Link } from "react-router-dom";

const BookList = ({books, onLoadMore}) => {
  return (
    <div>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={onLoadMore}>Load more</button>
    </div>
  );
}

export default BookList;
