import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../actions/a_auth";

const Navbar = ({ auth: { isAuthenticated , user}, logout }) => {
  const onClick = () => {
    logout();
  };

  const authLinks = (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item  me-auto">
          <NavLink className="nav-link" to="/dashboard">
            My Profile
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link" to="/list">
            About
          </NavLink>
        </li>

        <li className="nav-item ">
          <NavLink className="nav-link" to="/appMovie">
            Movie Reviews
          </NavLink>
        </li>
        <li className="nav-item ms-5 " >
          <NavLink className="nav-link text-info float-end fw-bold text-capitalize" to="#">
            {/* {user.name} */}
         User:     {user && user.name}
          </NavLink>
        </li>

        <li className="nav-item" onClick={onClick}>
          <NavLink className="nav-link" to="#!">
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );

  const guestLinks = (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            LOGIN
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link bg-primary rounded fs-6 py-.2" to="/register">
            REGISTER
          </NavLink>
        </li>
        
      </ul>
    </div>
  );

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark d-flex flex-row justify-content-end">
        <NavLink className="navbar-brand px-4 fw-bold me-auto" to="/">
          MOVIE SPACE
        </NavLink>
        {/* <NavLink className="nav-link text-white rounded fs-6 py-.2" to="/dashboard">
            Time Table
          </NavLink>
        <NavLink className="nav-link text-white rounded fs-6 py-.2" to="/dashboard">
            Syllabus
          </NavLink>
        <NavLink className="nav-link text-white rounded fs-6 py-.2" to="/dashboard">
            Notice
          </NavLink> */}
        <button  
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <span className="d-flex flex-row justify-content-end px-4">
        {isAuthenticated ? authLinks : guestLinks}
        </span>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
