import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../actions/a_alert";
import PropTypes from "prop-types";
import Alert from "./Alert";
import { login } from "../actions/a_auth";
import loginImg from "./img/login.png";

const Login = ({ setAlert, login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="form_container d-flex flex-row justify-content-around align-items-center">
      <div className="loginImg">
        <img src={loginImg} height="500px" width="500px"/>
      </div>
      <div>
      <Form className="login_form" onSubmit={onSubmit}>
        <h1 className="form_heading fw-bold ">Login</h1>
        <Alert />
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="fw-bolder ">Email address</Form.Label>
          <Form.Control
            value={email}
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="pt-1 fw-bolder">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </Form.Group>

        <Button variant="success" className="my-2 " type="submit">
          Submit
        </Button>

        <center>
          <Link to="/register">Not a User?</Link>
        </center>
      </Form>
      </div>
    </div>
  );
};

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, login })(Login);
