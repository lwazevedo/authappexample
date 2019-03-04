import React, { Component } from 'react';
import { AuthConsumer } from '../contexts/authContext';
import {withRouter} from 'react-router-dom'

class singIng extends Component {
  render() {
    return (
      <AuthConsumer>
        {({ login }) => (
          <div className='container pt-5'>
            <div className='row justify-content-sm-center'>
              <div className='col-sm-10 col-md-6'>
                <div className='card border-info'>
                  <div className='card-header'>Sign in to continue</div>
                  <div className='card-body'>
                    <div className='row'>
                      {/* <div className='col-md-4 text-center'>
                       <img src='https://placeimg.com/128/128/tech/sepia' />
                       <h4 className='text-center'>Hunger & Debt Ltd</h4>
                     </div> */}
                      <div className='col-md-12'>
                        <form className='form-signin'>
                          <input
                            type='text'
                            className='form-control mb-2'
                            placeholder='Email'
                            required
                            // autofocus
                          />
                          <input
                            type='password'
                            className='form-control mb-2'
                            placeholder='Password'
                            required
                          />
                          
                          <button
                            className='btn btn-lg btn-primary btn-block mb-1'
                            type='submit'
                            onClick={login}
                          >
                            Sign in
                          </button>
                          {/* <label className='checkbox float-left'>
                           <input type='checkbox' value='remember-me' />
                           Remember me
                         </label> */}
                          {/* <a href='#' className='float-right'>
                           Need help?
                         </a> */}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <a href='#' className='float-right'>
                 Create an account{' '}
               </a> */}
              </div>
            </div>
          </div>
        )}
      </AuthConsumer>
    );
  }
}

export default withRouter(singIng);
