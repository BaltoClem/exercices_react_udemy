// Les Concepts de React Suite - 009 BrowserRoute, Route, Switch, Nav, NavLink, Strict et Exact - 17:24
import React from 'react';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Community from './components/Community';
import Menu from './components/Menu';
import ErrorPage from './components/ErrorPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Menu />
        <Routes>
          <Route exact path='/' element={<Docs />} />
          <Route path='/tutorials' element={<Tutorials />} />
          <Route path='/community' element={<Community />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
