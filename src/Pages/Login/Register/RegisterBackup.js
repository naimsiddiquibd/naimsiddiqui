import React, { useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import './Register.css';

const RegisterBackup = () => {

  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();
  

  const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
  }
  const handleLoginSubmit = e => {
      if (loginData.password !== loginData.password2) {
          alert('Your password did not match');
          return
      }
      registerUser(loginData.email, loginData.password, loginData.name, history);
      e.preventDefault();
  }


    return (
        <div>
            <Navigation></Navigation>
            <section id="hero" className="d-flex flex-column justify-content-center">
                <div className="container">



                <div className="mt-5">
            <div className="row pt-5">
    <div className="col-md-4 form">
      <div className="form-bg">

            <div className="headline">
              <h3>Sign Up</h3>
            </div>


                  { !isLoading && <form onSubmit={handleLoginSubmit}>

                  <div className="mb-3">
                    <input onBlur={handleOnBlur} name="name" placeholder="Name" type="text" className="form-control form-custom" aria-describedby="emailHelp"/>
                  </div>

                  <div className="mb-3">
                    <input onBlur={handleOnBlur} name="email" placeholder="Email" type="email" className="form-control form-custom" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>

                  <div className="mb-3">
                    <input onBlur={handleOnBlur} name="password" placeholder="Password" type="password" className="form-control form-custom" id="exampleInputPassword1"/>
                  </div>

                  <div className="mb-3">
                    <input onBlur={handleOnBlur} name="password2" placeholder="Confirm password" type="password" className="form-control form-custom" id="exampleInputPassword1"/>
                  </div>


                  <div class="mb-3 mt-2">
                  <label for="formFile" class="form-label">Upload a profile picture</label>
                  <input class="form-control" type="file" id="formFile"/>
                  </div>

                  <button type="submit" className="btn btn-primary custom-btn">Sign up</button>

                  <div className="already-account">
                  <p className='login-font'>Already have an account? <Link className="log-link" to="/login">Login</Link> </p>
                  </div>
                  </form>}

                  { isLoading && <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div> }
                  {user?.email && <div class="alert alert-success" role="alert">
                    Your account hass been successfully created!
                  </div>}
                  {authError && <div class="alert alert-danger" role="alert">
                    {authError}
                  </div>}


        
        </div>
    </div>

    </div>
        </div>


                </div>
        </section>
        </div>
    );
};

export default RegisterBackup;