import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import { Routes } from '../index';

import { AuthProvider } from '../index';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Router>
  );
};

export default App;
