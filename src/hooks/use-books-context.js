//libs
import { useContext } from "react";
//context
import BooksContext from "../context/books";

function useBooksContext() {
    return useContext(BooksContext);
}
export default useBooksContext;