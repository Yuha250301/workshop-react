import logo from "./logo.svg";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import { useState } from "react";
import { DISHES } from "./shared/dish.js";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Main />
            </div>
        </BrowserRouter>
    );
}

export default App;
