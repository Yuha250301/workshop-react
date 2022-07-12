import logo from "./logo.svg";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from './components/MenuComponent';
import { useState } from 'react';
import { DISHES } from './shared/dish.js';
import Main from "./components/MainComponent";

function App() {
    const [dishes, setDish] = useState(DISHES);

    return (
        <div className="App">
            <Main/>
        </div>
    );
}

export default App;
