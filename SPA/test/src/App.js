// Les Concepts de React Suite - 009 BrowserRoute, Route, Switch, Nav, NavLink, Strict et Exact - 17:24
import React from 'react';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Community from './components/Community';
import Menu from './components/Menu';
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
   <>
    <Menu />
    <Docs />
    <Tutorials />
    <Community />
   </>
  );
}

export default App;
