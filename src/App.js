import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import { AuthProvider } from './contexts/authContext';
import ProtectedRoute from './components/ProtectedRoute';
import SingIn from './components/singIng';
import Header from './components/header';
import Home from './components/home';
import NotFound from './components/notFound'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Switch>
            <ProtectedRoute path='/home' component={Home} />
            <Route exact path='/' component={SingIn} />
            <Route path='*' component={NotFound}  />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    );
  }
}

export default App;
