//libs
import { useState} from "react";
//custom hooks
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
    //context management
    const {createBook} = useBooksContext();
    //state management
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    }
    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} type="text" onChange={handleChange} className="input"/>
                <button className="button">Create!</button>
            </form>
        </div>
    );
};

export default BookCreate;