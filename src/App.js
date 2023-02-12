import React, { useState } from 'react';
import './App.css';
import { HomePage } from './components/homepage/homepage';
import { RecipeGenerator } from './components/recipeGenerator/recipeGenerator';

function App() {
  const [ showHomePage, setShowHomePage ] = useState(true);

  if (showHomePage) {
    return <HomePage toggleShowHomePage={()=>setShowHomePage(!showHomePage)}/>
  }
  return <RecipeGenerator/>
}

export default App;
