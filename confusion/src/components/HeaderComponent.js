import React, { useState } from "react";
import { Collapse, Jumbotron, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(0);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                        <img
                            src="assets/images/logo.png"
                            alt="Logo"
                            height="30"
                        />
                    </NavbarBrand>
                    <Collapse
                        // className="display-flex"
                        isOpen={isNavOpen}
                        navbar
                    >
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span>{" "}
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span>{" "}
                                    About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span>{" "}
                                    Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span>{" "}
                                    Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>{" "}
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante Con Fusion</h1>
                            <p>
                                We take inspiration from the World's best
                                cuisines, and create a unique fusion experience.
                            </p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </div>
    );
};

export default Header;
