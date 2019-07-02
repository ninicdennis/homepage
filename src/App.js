import React from 'react';
import './App.css';

import Header from './components/header/header'

import { BrowserRouter, Route, Link } from "react-router-dom";

import Main from './pages/main/main'
import Projects from './pages/projects/projects';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
        <span className = 'bar'>
          <Link to = '/'><p>/Main</p></Link>
          <Link to = '/projects'><p>/Projects</p></Link>

        </span>
        <Route exact path='/' component = {Main} />
        <Route path='/projects' component = {Projects} />

    </div>
    </BrowserRouter>
  );
}

export default App;
