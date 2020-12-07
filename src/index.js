import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main.js";
import Home from "./components/home.js";
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./components/generic/header.js";

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>,
    document.getElementById("root")
);