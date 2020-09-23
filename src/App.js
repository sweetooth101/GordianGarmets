import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Landing from './components/Landing';
import ProductView from './components/ProductView';
import PaymentForm from './components/payment/PaymentForm';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landing} />
      <Route  path='/view' component={ProductView}/>
      <Route path='/payment' component={PaymentForm}/>
    </div>
  );
}

export default App;
