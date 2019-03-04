import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { AuthConsumer } from '../contexts/authContext';

class header extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark static-top'>
        <div className='container'>
          <Link className='navbar-brand' to='/home'>
            <img src='http://placehold.it/150x50?text=Logo' alt='' />
          </Link>
          <AuthConsumer>
            {({ isAuth, logout }) =>
              isAuth ? (
                <Fragment>
                  {/* Init Button */}
                  <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarResponsive'
                    aria-controls='navbarResponsive'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                  >
                    <span className='navbar-toggler-icon' />
                  </button>
                  {/* Final Button */}
                  {/* Init Nav Collapse */}
                  <div
                    className='collapse navbar-collapse'
                    id='navbarResponsive'
                  >
                    <ul className='navbar-nav ml-auto'>
                      <li className='nav-item active'>
                        <Link className='nav-link' to='/home'>
                          Home
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link className='nav-link' onClick={logout} to='/'>
                          logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Final nav Collapse */}
                </Fragment>
              ) : (
                <div />
              )
            }
          </AuthConsumer>
        </div>
      </nav>
    );
  }
}

export default header;
