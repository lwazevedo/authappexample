import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import { Routes } from '../index';

import { AuthProvider, LayoutMaterialProvider } from '../index';

const App = () => {
  return (
    <Router>
      <LayoutMaterialProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </LayoutMaterialProvider>
    </Router>
  );
};

export default App;
