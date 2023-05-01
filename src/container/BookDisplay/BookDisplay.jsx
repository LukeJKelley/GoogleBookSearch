import { useState, useEffect } from "react";
import { fetchBooks } from "../../services/FetchBooks.js";
import BooksCard from "../../components/BooksCard/BooksCard";

const BookDisplay = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const Wrapper = async () => {
      try {
        const books = await fetchBooks();
        setBooks(books);
      } catch (e) {
        console.log(e);
      }
    };
    Wrapper();
  }, []);
  console.log(Object.keys(books), "book");

  return (
    <>
      <BooksCard books={books} />
    </>
  );
};

export default BookDisplay;
