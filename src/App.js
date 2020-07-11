import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Route path='/' component={ProductList} />
    </div>
  );
}

export default App;
