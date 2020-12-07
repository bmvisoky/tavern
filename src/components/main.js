import React, { Component } from "react";
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import Header from "./generic/header.js";
import Footer from "./generic/footer.js";
import Home from "./home.js";
import Generator from "./generator.js";
import Container from 'react-bootstrap/Container';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Container fluid>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/generator' component={Generator} />
                    </Switch>
                </div>
                </Container>
            </div>
        );
    }
}

export default Main;