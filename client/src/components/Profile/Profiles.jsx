import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col, Button } from 'react-bootstrap';

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('https://lsoys-2ob7.onrender.com/api/profile');
        if (Array.isArray(response.data)) {
          setProfiles(response.data);
        } else {
          console.error('Profiles data is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching profiles', error);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div className="container mt-5">
      <Row>
        {Array.isArray(profiles) && profiles.map((profile) => (
          <Col key={profile._id} md={4} className="mb-5">
            <Card className="shadow-lg border-light rounded-lg">
              {/* <Card.Img variant="top" src="https://via.placeholder.com/300x200" /> */}
              <Card.Body>
                <Card.Title className="text-center font-weight-bold">{profile.name}</Card.Title>
                <Card.Text>
                  <strong>Location:</strong> {profile.location}
                </Card.Text>
                <Card.Text>
                  <strong>Travel Date:</strong> {new Date(profile.travelDate).toLocaleDateString()}
                </Card.Text>
                <Card.Text>
                  <strong>Gender:</strong> {profile.gender}
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Profiles;
