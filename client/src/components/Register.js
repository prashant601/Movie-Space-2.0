import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../actions/a_alert";
import PropTypes from "prop-types";
import Alert from "./Alert";
import { register } from "../actions/a_auth";
import registerImg from "./img/login.png";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords dont match", "danger");
    } else {
      register({ name, email,  password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="form_container1 d-flex flex-row md-flex-column justify-content-around align-items-center">
      <div className="registerImg">
        <img src={registerImg} height="500px" width="500px"/>
      </div>
      <div>
      <Form className="reg_form" onSubmit={onSubmit}>
        <h1 className="form_heading fw-bold">Register</h1>
        <Alert />
        <Form.Group controlId="formBasicName">
          <Form.Label className="fw-bolder ">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label className="fw-bolder pt-1">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </Form.Group>

        {/* <Form.Group controlId="formBasicNumber" >
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter mobile no."
            name="number"
            value={number}
            onChange={onChange}
          />
        </Form.Group> */}

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="fw-bolder pt-1 ">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword2">
          <Form.Label className="fw-bolder pt-1 ">Renter Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Renter password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </Form.Group>

        <Button variant="success" className="mt-2" type="submit">
          Submit
        </Button>

        <center className="p-2">
          <Link to="/login">Already a User?</Link>
        </center>
      </Form>

    </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
