import React from 'react';
import './App.css';

import Header from './Layout/Header';
import Footer from './Layout/Footer';

import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
      <Header/>
      <Register/>
      <Footer/>
    </div>
  );
}

export default App;
