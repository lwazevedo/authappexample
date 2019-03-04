import React from 'react';
// import {} from 'react-router-dom';

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  state = { isAuth: false, redirect: false };
  localIsAuth = { localIsAuth: false };

  constructor() {
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    this.localIsAuth = localStorage.getItem('localIsAuth');
    if (this.localIsAuth) {
      this.setState({ isAuth: this.localIsAuth });
    }
  }

  login() {
    console.log()
    
    this.setState({ isAuth: true, redirect: true });
    localStorage.setItem('localIsAuth', 'true');
  }

  logout() {
    this.setState({ isAuth: false, redirect: false });
    localStorage.removeItem('localIsAuth');
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          login: this.login,
          logout: this.logout
        }}
      >
        
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
