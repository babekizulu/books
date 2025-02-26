//libs
import {useState} from 'react'
//components
import BookEdit from "./BookEdit";
//custom hooks
import useBooksContext from '../hooks/use-books-context';

function BookShow({book}) {
    //context management
    const {deleteBookById} = useBooksContext();
    //state management
    const [showEdit, setShowEdit] = useState(false);
    //handlers
    const handleDeleteClick = () => {
        deleteBookById(book.id);
    }
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book}/>
    }
    return (
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt='books'/>
            <div>{content}</div>
            <div className="actions">
                <button className='edit' onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default BookShow;