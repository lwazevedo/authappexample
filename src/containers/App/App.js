import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import { Routes } from '../index';

import { AuthProvider, LayoutMaterialProvider, PageLayout } from '../index';

const App = () => {
  return (
    <Router>
      <LayoutMaterialProvider>
        <AuthProvider>
          <PageLayout>
            <Routes />
          </PageLayout>
        </AuthProvider>
      </LayoutMaterialProvider>
    </Router>
  );
};

export default App;
