import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Generator from "../generator.js";
import Home from "../home.js";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Switch, Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand as={Link} to ="/">Tavern</Navbar.Brand>
                        <Nav>
                            <Nav.Link as={Link} to="/generator">Generator</Nav.Link>
                        </Nav>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </Navbar>
                </div>
            </div>

        );
    }
}

export default Header;