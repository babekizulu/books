//libs
import { useState} from "react";
//custom hooks
import useBooksContext from "../hooks/use-books-context";

function BookEdit({book, onSubmit}) {
    //context management
    const {editBookById} = useBooksContext();
    //state management
    const [title, setTitle] = useState(book.title);

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
        editBookById(book.id, title);
    }

    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button is-primary">
                Save
            </button>
        </form>
    );
};

export default BookEdit;