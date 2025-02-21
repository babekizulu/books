//libs
import {useEffect, useContext} from "react";
//components
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList';
//context
import BooksContext from "./context/books";

function App() {
    //context management
    const {fetchBooks} = useContext(BooksContext);

    //lifecycle methods
    useEffect(() => {
        fetchBooks();
    },[fetchBooks]);
    

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList/>
            <BookCreate/>
        </div>
    );
};

export default App;