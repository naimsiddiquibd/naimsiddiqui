import React, { useState } from 'react';
import { NavLink, Link, useLocation, useHistory } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import useAuth from './../../../hooks/useAuth';
import './Login.css';
  


const Login = () => {

  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

    const handleOnChange = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
  }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    
    const handleGoogleSignIn = () => {
      signInWithGoogle(location, history)
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
              <h3>Login</h3>
            </div>

            <div className="mb-3">
              <button onClick={handleGoogleSignIn}  type="submit" className="btn btn-outline-dark google-btn-custom">Continue with Google</button>
            </div>

        <form onSubmit={handleLoginSubmit}>

            <div><p className="text-center login-font">or</p></div>

            <div className="mb-3">
              <input onBlur={handleOnChange} name="email" placeholder="Email" type="email" className="form-control form-custom" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>

            <div className="mb-3">
              <input onBlur={handleOnChange} name="password" placeholder="Password" type="password" className="form-control form-custom" id="exampleInputPassword1"/>
            </div>

            <button type="submit" className="btn btn-primary custom-btn">Login</button>

            <div className="already-account">
            <p className='login-font'><a href="/">Forgot password?</a></p>
            </div>

            <div className="already-account">
            <p className='login-font'>No account? <Link className="log-link" to="/register">Create one</Link> </p>
            </div>

            {isLoading && <div class="spinner-border text-primary" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>}
                        {user?.email && <div class="alert alert-success" role="alert">
                          Successfully logedin!
                        </div>}
                        {authError && <div class="alert alert-danger" role="alert">
                          {authError}
                        </div>}

        </form>
        </div>
    </div>

    </div>
        </div>


                </div>
        </section>
        </div>
    );
};

export default Login;