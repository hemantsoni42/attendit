import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, useNavigate } from 'react-router-dom';
import SIGNUP from '../../image/sign_up.png';
import './form.css';
import Navbar from '../NavBar/Navbar';

const SignUp = () => {

  const history = useNavigate();

  const [inputValue, setValue] = useState({
    name: '',
    roll_number: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [data] = useState([]);

  const getData = (e) => {
    const { value, name } = e.target;

    setValue(() => {
      return {
        ...inputValue,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, roll_number, email, password, confirmPassword } = inputValue;

    if (password !== confirmPassword) {
      alert('Confirm password , password should be same !!!');
    } else if (name === '') {
      alert('Name field is required !!!!');
    } else if (roll_number === '') {
      alert('Roll number field is required !!!!');
    } else if (email === '') {
      alert('Email field is required !!!!');
    } else if (!email.includes('@gitjaipur.com')) {
      alert('Email field should include @gitjaipur.com !!!!');
    } else if (password.length < 5) {
      alert('Password is too short, must be greater than 5 !!!');
    }else{
      localStorage.setItem("hemuMihir",JSON.stringify([...data,inputValue]));
      history('/');
    }
  };

  return (
    <>
    <Navbar/>
      <div className="container">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-2" style={{ width: '100%' }}>
            <h3 className="text-center col-lg-6 mt-4">Sign Up</h3>
            <Form>
              <Form.Group className="mb-2 col-lg-6" controlId="formBasicName">
                <Form.Label className="mt-2">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getData}
                  placeholder="Enter Name"
                />
              </Form.Group>

              <Form.Group
                className="mb-2 col-lg-6"
                controlId="formBasicRoll_No"
              >
                <Form.Label className="mt-2">Roll Number</Form.Label>
                <Form.Control
                  type="text"
                  name="roll_number"
                  onChange={getData}
                  placeholder="Enter Roll number"
                />
              </Form.Group>

              <Form.Group className="mb-2 col-lg-6" controlId="formBasicEmail">
                <Form.Label className="mt-2">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getData}
                  placeholder="Enter email ex.=xyz.gitjaipur.com"
                />
              </Form.Group>

              <Form.Group
                className="mb-2 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Label className="mt-2">Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getData}
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group
                className="mb-2 col-lg-6"
                controlId="formBasicConfirmPassword"
              >
                <Form.Label className="mt-2">Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  onChange={getData}
                  placeholder="Confirm Password"
                />
              </Form.Group>
              <Button
                className="col-lg-6"
                style={{ backgroundColor: '#4649ee' }}
                onClick={addData}
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className='mt-3'>
              Already have an account. <NavLink to="/">Log In</NavLink>
            </p>
          </div>
          <div className="right_data mt-5" style={{ width: '100%' }}>
            <div className="sign-img">
              <img src={SIGNUP} alt="LOGIN_IMG" style={{ maxWidth: 600 }} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;
