import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, useNavigate } from 'react-router-dom';
import LOGIN from '../../image/login.webp';
import './form.css';
import { useState } from 'react';
import Navbar from '../NavBar/Navbar';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const LoginForm = () => {
  const history = useNavigate();

  const [inputValue, setValue] = useState({
    email: '',
    password: '',
  });

  const getData = (e) => {
    const { value, name } = e.target;

    setValue(() => {
      return {
        ...inputValue,
        [name]: value,
      };
    });
  };

  const checkData = (e) => {
    e.preventDefault();

    const { email, password } = inputValue;
    const getUserArr = localStorage.getItem('hemuMihir');

    if (email === '') {
      alert('Email field is required !!!!');
    } else if (!email.includes('@gitjaipur.com')) {
      alert('Email field should include @gitjaipur.com !!!!');
    } else if (password.length < 5) {
      alert('Password is too short, must be greater than 5 !!!');
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);
        const userLogin = userData.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userLogin.length === 0) {
          alert('invalid user');
        } else {
          history('/user-home', { replace: true });
        }
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <section className="d-flex justify-content-between">
        <div className="left_data mt-4" style={{ width: '100%' }}>
          {/* <h3 className="text-center col-lg-6 mt-4">Log In</h3> */}

          <Card className="shadow-lg position-static ">
            <CardHeader className="text-center p-3">
              Log In here soooorhuvbuydbuyvgebsydcvfcdh
            </CardHeader>
            <Card.Body>
              <Form>
                <Form.Group
                  className="mb-5 "
                  controlId="formBasicEmail"
                >
                  <Form.Label className="mt-4">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    onChange={getData}
                    name="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-5 "
                  controlId="formBasicPassword"
                >
                  <Form.Label className="mt-4">Password</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={getData}
                    name="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Button
                  className="col-lg-12  "
                  style={{ backgroundColor: '#4649ee' }}
                  onClick={checkData}
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <p className="mt-3">
            Don't have an account ? <NavLink to="/Sign_Up">Sign Up</NavLink>
          </p>
        </div>
        <div className="right_data mt-5" style={{ width: '100%' }}>
          <div className="sign-img">
            <img src={LOGIN} alt="LOGIN_IMG" style={{ maxWidth: 480 }} />
          </div>
        </div>
        </section>
      </div>
    </>
  );
};

export default LoginForm;
