import {Link, useParams} from "react-router-dom";
import Axios from 'axios';
import {useEffect, useState} from "react";

const axios = Axios.create({
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  },
});

const getBookImg = book => {
  return book.formats['image/jpeg'];
}

const setFavorite = async (bookId, favorite) => {
  axios.post(`http://localhost:5000/book/${bookId}`, {favorite})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

const getFavorite = async (bookId) => {
  axios.get(`http://localhost:5000/book/${bookId}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

const Book = ({books}) => {
  let { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    console.log('id', id)
    if(id) {
      const fetchFavorite = async () => {
        console.log(await getFavorite(id));
      }
      fetchFavorite();
    }
  }, [id])


  const book = books.find(b => b.id === Number(id));
  if(!book) return "book not found";

  return <div>
    <div><Link to={`/`}>← Go back to list of books</Link></div>
    <h1>Title: {book.title}</h1>
    <div>Authors: {book.authors.map(author => `${author.name}`)}</div>
    <img src={getBookImg(book)} alt={`${book.title} Cover`}/>
    <button onClick={() => setFavorite(book.id, true)}>Mark/Unmark as favorite</button>
  </div>;
}

export default Book;
