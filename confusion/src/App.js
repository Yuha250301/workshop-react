import logo from "./logo.svg";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from './components/MenuComponent';
import { useState } from 'react';
import { DISHES } from './shared/dish2.js';

function App() {
    const [dishes, setDish] = useState(DISHES);

    return (
        <div className="App">
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <Menu dishes={dishes}/>
        </div>
    );
}

export default App;
