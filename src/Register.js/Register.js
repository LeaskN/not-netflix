import axios from "axios";
import { Form, Button } from "react-bootstrap";
import React, { useState } from 'react'

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(null);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    const configuration = {
      method: "post",
      url: "https://nodejs-mongodb-auth-app.herokuapp.com/register",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((res) => {
        setRegister(true);
      })
      .catch((error) => {
        setRegister(false);
        error = new Error();
      });
  }

  return (
    <>
      <h2>Register</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        {/* submit button */}
        <br />
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Register
        </Button>
        {/* display success message */}
        {register === true ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          register === false > 0 ?
            <p className="text-danger">You Are Not Registered</p>
            : ''
        )}
      </Form>
    </>
  )
}