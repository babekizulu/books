//libs
import { createRoot } from "react-dom/client";
//components
import App from './App';
//context
import { Provider } from "./context/books";
//styling
import './css/index.css'
//dom elements
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(
    <Provider>
        <App/>
    </Provider>
);