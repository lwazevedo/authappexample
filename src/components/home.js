import React, { Component } from 'react';

class home extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    localStorage.removeItem('user_logado');
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='row justify-content-center align-items-center mt-5'>
        <div className='col-4'>
          <div className='card'>
            <div className='card-body'>
              <p className='text-center text-danger'>Você está logado....</p>
              <button
                type='button'
                onClick={this.onLogout}
                className='btn btn-primary'
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default home;
