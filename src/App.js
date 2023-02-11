import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
import { NavBar } from './components/navbar/navbar.jsx'
import { HomePage } from './components/homepage/homepage';
function App() {
  return (
    <div className='parent'>
      <NavBar></NavBar>
      <HomePage></HomePage>
    </div>
  )
}

export default App;
