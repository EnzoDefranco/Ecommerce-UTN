
import noresults from "../../mocks/noresults.json";
import { useState } from "react";
import { json } from "react-router-dom";

export function useBooks ({ search }) {
    const [responseMovies, setResponseMovies] = useState([])

    const books = responseMovies.items;

    const mappedBooks = books
    ?.map((book) => ({
      id: book.id,
      title: (book.volumeInfo?.title || '').split(' / ')[0],
      poster: book.volumeInfo?.imageLinks?.thumbnail,
      paginas: book.volumeInfo?.pageCount || 110,
      autor: book.volumeInfo?.authors || [],
      editorial: book.volumeInfo?.publisher || '',
      estrellas: book.volumeInfo?.averageRating || 2,
    }))
    .filter(
      (book) =>
        book.title && book.poster 
    );

      
    const getBooks = () => {
        if (search) {
            // setResponseMovies(withresults)
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDEdSY3HZWz3bZ6Zd_3XQgxoZEp3ZYSvWc`)
            .then(response => response.json())
            .then(json => setResponseMovies(json))
        } else {
            setResponseMovies(noresults)
        }
    }
        return {books: mappedBooks, getBooks}
}