import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
