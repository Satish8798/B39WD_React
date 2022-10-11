import { Book } from './Book';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

export function Home() {
  return <h1>Welcome to the Book App🥳🥳🎆🎇</h1>;
}
export function BookList({bookList,setBookList}) {
  // const bookList = INITIAL_BOOK_LIST;


  return (
    <div>
      
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book key={index} books={bk} id={index} />
        ))}
      </div>
    </div>


  );
}

export function AddBook({bookList,setBookList}){

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const nav=useNavigate();

  return(
    <div className='add-book-form'>
        <TextField className='text-field'
          // onChange -typing event , setColor -react-> value -> word
          onChange={(event) => setName(event.target.value)}
          label="Name"
          variant="standard" />
        <TextField className='text-field'
          // onChange -typing event , setColor -react-> value -> word
          onChange={(event) => setPoster(event.target.value)}
          label="Poster"
          variant="standard" />
        <TextField className='text-field'
          // onChange -typing event , setColor -react-> value -> word
          onChange={(event) => setRating(event.target.value)}
          label="Rating"
          variant="standard" />

        <TextField className='text-field'
          onChange={(event) => setSummary(event.target.value)}
          label="Summary"
          variant="standard" />

        <Button className='btn'
          // copy the bookList and add newBook to it - newBook is an object
          onClick={() => {
            const newBook = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
            };
            setBookList([...bookList, newBook]);
            nav('/books')
          }}
          variant="contained">Add Book</Button>

      </div>
  );
}
