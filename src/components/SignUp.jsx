import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "", address: "", city: "", state: "", zip: "", agree: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, address, city, state, zip, agree } = formData;
    if (!email || !password || !address || !city || !state || !zip) return alert("Please complete all fields");
    if (!agree) return alert("You must agree to terms and conditions");
    if (localStorage.getItem(email)) return alert("User already registered. Please login.");

    localStorage.setItem(email, JSON.stringify({ email, password, address, city, state, zip }));
    alert("Registration successful! Please login.");
    navigate("/Login");
  };

  return (
    <div className="signup-container">
      <h2 className="text-center mb-3">Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" required />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} placeholder="123 Main St" required />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} required />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>State</Form.Label>
            <Form.Select name="state" value={formData.state} onChange={handleChange} required>
              <option value="">Choose...</option>
              <option>Andhra Pradesh</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Karnataka</option>
              <option>Maharashtra</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" name="zip" value={formData.zip} onChange={handleChange} required />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="I agree to terms and conditions" name="agree" checked={formData.agree} onChange={handleChange} required />
        </Form.Group>
        <Button type="submit" className="w-100">Sign Up</Button>
        <p className="mt-2 text-center">
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </Form>
    </div>
  );
};

export default SignUp;
