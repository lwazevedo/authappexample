import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    };
    this.onSingIn = this.onSingIn.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  onSingIn(event) {
    event.preventDefault();
    if (this.state.name === 'teste') {
      localStorage.setItem(
        'user_logado',
        JSON.stringify({ isAuthenticated: true, name: this.state.name })
      );
    //   this.props.locations.state = this.state;
      this.props.history.push('/app');
    }
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className='row justify-content-center align-items-center mt-5'>
        <div className='col-4'>
          <div className='card'>
            <div className='card-body'>
              <form onSubmit={this.onSingIn}>
                <div className='form-group'>
                  <input
                    type='text'
                    name='name'
                    className='form-control'
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    name='password'
                    className='form-control'
                    onChange={this.handleInputChange}
                  />
                </div>
                <button type='submit' className='btn btn-primary'>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(login);
