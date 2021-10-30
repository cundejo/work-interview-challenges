import {useState, useEffect} from "react";

const getBooks = async (page) => {
  const response = await fetch(`https://gutendex.com/books/?page=${page}`);
  return await response.json();
}

const useLibrary = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const loadMore = () => setCurrentPage(prev => prev + 1);

  useEffect(()=> {
      const fetchBooks = async () => {
        const newBooks = await getBooks(currentPage);
        setBooks((prev) => ([...prev, ...newBooks.results]));
      }

      fetchBooks();
    },
    [currentPage]);

  return [books, loadMore];
}

export default useLibrary;
