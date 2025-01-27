import React, { useState } from 'react';
import { Form, Button, Container, Alert, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const AddProfile = () => {
  const [formData, setFormData] = useState({
    location: '',
    travelDate: '',
    gender: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/profile/pro', formData);

      console.log('Profile created:', response.data);
      setSuccess(true);
      setError(null);
    } catch (error) {
      console.error('Error creating profile:', error);
      setError('There was an issue submitting the form. Please try again.');
      setSuccess(false);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white">
              <h2 className="h4 mb-0">Create Profile</h2>
            </Card.Header>
            <Card.Body className="p-4">
              {success && (
                <Alert variant="success" className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Profile created successfully!
                </Alert>
              )}
              {error && (
                <Alert variant="danger" className="d-flex align-items-center">
                  <i className="bi bi-exclamation-triangle-fill me-2"></i>
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formLocation" className="mb-4">
                  <Form.Label className="fw-bold">Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="form-control-lg"
                  />
                </Form.Group>

                <Form.Group controlId="formTravelDate" className="mb-4">
                  <Form.Label className="fw-bold">Travel Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    required
                    className="form-control-lg"
                  />
                </Form.Group>

                <Form.Group controlId="formGender" className="mb-4">
                  <Form.Label className="fw-bold">Gender</Form.Label>
                  <Form.Select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="form-control-lg"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button 
                    variant="primary" 
                    type="submit" 
                    size="lg"
                    className="py-3"
                  >
                    Create Profile
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProfile;