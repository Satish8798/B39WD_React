import { useParams } from "react-router-dom";

//eg - books/1
//useParama - extract (number - id/index) from URL
export function BookDetails() {

  const { bookid } = useParams();

  return (
    <h1>Book Detail Page {bookid}</h1>
  );
}
