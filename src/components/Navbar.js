import React from 'react';
import logo from '../assets/images/logo-new.jpg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="Logo" style={{ height: 50, width: 50, borderRadius: '50%' }} />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#" style={{ marginRight: '5px' }}>Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#"style={{ marginRight: '5px' }}>About Us</a></li>
          <li className="nav-item"><a className="nav-link" href="#"style={{ marginRight: '5px' }}>Services</a></li>
          <li className="nav-item"><a className="nav-link" href="#" style={{ marginRight: '50px' }}>Contact Us</a></li>
        </ul>
        <form className="form-inline ml-3" style={{ display: 'flex', alignItems: 'center' }}>
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" style={{ width: '200px', marginRight: '5px'}} />
          <button className="btn btn-outline-light ml-2" style={{ marginRight: '10px' }} type="submit">Search</button>

        </form>
      </div>
    </nav>
  );
};

export default Navbar;
