import '@babel/polyfill';
import App from "./components/App.jsx";
import React from "react";
import ReactDOM from "react-dom";

const wrapper = document.getElementById('root');
ReactDOM.render(<App />, wrapper);