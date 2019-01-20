import '@babel/polyfill';
import App from "./components/App.jsx";
import React from "react";
import ReactDOM from "react-dom";
import moviesService from './services/moviesService';

//Initialize movie db configuration
moviesService.initConfiguration();

const wrapper = document.getElementById('root');
ReactDOM.render(<App />, wrapper);