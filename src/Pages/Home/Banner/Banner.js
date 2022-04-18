import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Banner = () => {
    const {user, login, logout} = useAuth();
    return (
    <section id="hero" className="d-flex flex-column justify-content-center">
    <div className="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Naim Siddiqui</h1>
      <p>MERN STACK DEVELOPER</p>
      {
        user?.email ?  
        <div>
          <Link onClick={login} className="log-link" to="/portal"><button type="button" class="btn btn-primary btn-sm ">Enter the world</button></Link>
          <button onClick={logout} type="button" class="btn btn-danger btn-sm ml-2">Logout</button>
        </div>
        :
        <small>Want to join my community? Please <Link onClick={login} className="log-link" to="/login">Login</Link></small>
      }
      
      <div className="social-links">
        <a href="https://twitter.com/naimsiddiquibd" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="https://www.facebook.com/naimsiddiquibd/" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="https://www.instagram.com/naimsiddiquibd/" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="https://github.com/naimsiddiquibd" className="google-plus"><i className="bx bxl-github"></i></a>
        <a href="https://www.linkedin.com/in/naim-siddiqui/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </section>
    );
};

export default Banner;