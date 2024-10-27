import { useState } from 'react'
import Header from './components/ComponentUI';
import ProductForm from './components/OrderForm';
import './App.css';

function App() {

  return (
    <div>
      <Header title="Welcome to product page"/>
      <ProductForm/>

    </div>
  )};


export default App
