import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  const [toggleMobileNavbar, setMobileNavbarDisplay] = useState(false);
  return (
    <header className="header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" loading="lazy" importance="high" decoding="async" />
          </Link>

          <span role="button" className={'navbar-burger burger ' + (toggleMobileNavbar ? 'is-active': '')} aria-label="menu" aria-expanded="false" data-target="main-navbar" onClick={() => setMobileNavbarDisplay(!toggleMobileNavbar)}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>

        <div id="main-navbar" className={'navbar-menu ' + (toggleMobileNavbar ? 'is-active': '')}>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/register" className="button is-info">
                  Register
                </Link>
                <Link to="/login" className="button is-info is-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;
