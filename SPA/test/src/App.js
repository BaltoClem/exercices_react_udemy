// Les Concepts de React Suite - 011 Paramètres Route - 10:41
import React, { Component } from 'react';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Community from './components/Community';
import Menu from './components/Menu';
import Profile from './components/Profile';
import ErrorPage from './components/ErrorPage';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
constructor(props) {
  super(props)

  this.state = {
     underConst: {
      Docs: false,
      Tutorials: true,
      Community: false
     }
  }
}

  render(){
  return (
    <BrowserRouter>
      <Menu />
        <Routes>
          <Route exact path='/' element={<Docs />} />
          <Route path='/tutorials' element={<Tutorials />} />

          {/* <Route path='/tutorials' render={() => (
            this.state.underConst.Tutorials ? (<Redirect to="/"/>) : (<Tutorials />)
          )} /> */}

          <Route path='/community' element={<Community />} />
          <Route path='/users/:id' element={<Profile />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
  );
}
}

export default App;
