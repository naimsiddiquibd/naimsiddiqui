import React, { useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import './Register.css';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();
  
  const handleLoginSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password2', password2);
    formData.append('image', image);

      if (formData.password !== formData.password2) {
          alert('Your password did not match');
          return
      }
      registerUser(email, password, name, history);
      fetch('https://lit-garden-79524.herokuapp.com/users', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
              if (data.insertedId) {
                  setSuccess('User added successfully');
                  console.log('User added successfully');
              }
          })
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
                    <input onChange={e => setName(e.target.value)} placeholder="Name" type="text" className="form-control form-custom" aria-describedby="emailHelp"/>
                  </div>

                  <div className="mb-3">
                    <input onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" className="form-control form-custom" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>

                  <div className="mb-3">
                    <input onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" className="form-control form-custom" id="exampleInputPassword1"/>
                  </div>

                  <div className="mb-3">
                    <input onChange={e => setPassword2(e.target.value)} placeholder="Confirm password" type="password" className="form-control form-custom" id="exampleInputPassword1"/>
                  </div>


                  <div class="mb-3 mt-2">
                  <label
                     for="formFile" class="form-label">Upload a profile picture</label>
                  <input onChange={e => setImage(e.target.files[0])} class="form-control" type="file" id="formFile"/>
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

export default Register;