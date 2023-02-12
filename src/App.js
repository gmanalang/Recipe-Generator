import React, { useState } from 'react';
import './App.css';
import { HomePage } from './components/homepage/homepage';
import { Search } from './components/Search/search'

function App() {
  const [ showHomePage, setShowHomePage ] = useState(true);

  if (showHomePage) {
    return <HomePage toggleShowHomePage={()=>setShowHomePage(!showHomePage)}/>
  }
  return <Search showHomePage={() => setShowHomePage(true)}/>
}

export default App;
