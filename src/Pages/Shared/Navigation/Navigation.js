import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        
        
        <header id="header" class="d-flex flex-column justify-content-center">
            <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
        <nav class="nav-menu">
          <ul>
            <li>
            <NavLink to="/"><i class="bx bx-home"></i><span>Home</span></NavLink>
            </li>

            <li>
            <NavLink to="/about"><i class="bx bx-user"></i><span>About</span></NavLink>
            </li>

            <li>
            <NavLink to="/experience"><i class="bx bx-file-blank"></i><span>Resume</span></NavLink>
            </li>

            <li>
            <NavLink to="/portfolio"><i class="bx bx-book-content"></i><span>Portfolio</span></NavLink>
            </li>

            <li>
            <NavLink to="/services"><i class="bx bx-server"></i><span>Services</span></NavLink>
            </li>
            
            <li>
            <NavLink to="/contact"><i class="bx bx-envelope"></i><span>Contact</span></NavLink>
            </li>

          </ul>
        </nav>
    
      </header>

    );
};

export default Navigation;