// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Alert from './components/Alert';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Alert/>
      <Card/>
      <Footer/>
    </div>
  );
};

export default App;
