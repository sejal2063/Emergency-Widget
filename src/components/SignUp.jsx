import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !address || !city || !state || !zip) {
      alert("Please complete all fields");
      return;
    }
    if (!agree) {
      alert("You must agree to terms and conditions");
      return;
    }
    if (localStorage.getItem(email)) {
      alert("User already registered. Please login.");
      navigate("/Login");
      return;
    }
    const user = { email, password, address, city, state, zip };
    localStorage.setItem(email, JSON.stringify(user));
    alert("Registration successful! Please login.");
    navigate("/Login");
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <Form className="signup-form" onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </Form.Group>
        </Row>
        <Form.Group as={Col} controlId="formGridPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="123 Main St"
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control value={city} onChange={e => setCity(e.target.value)} required />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select value={state} onChange={e => setState(e.target.value)} required>
              <option value="" disabled>Choose...</option>
              <option>Andhra Pradesh</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Karnataka</option>
              <option>Maharashtra</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control value={zip} onChange={e => setZip(e.target.value)} required />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="I agree to terms and conditions"
            checked={agree}
            onChange={e => setAgree(e.target.checked)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">Sign Up</Button>
        <p className="login-text">
        Already have an account? <Link to="/Home/Login">Login</Link>
        </p>
      </Form>
    </div>
  );
};

export default SignUp;
