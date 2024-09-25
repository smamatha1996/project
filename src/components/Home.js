import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1>Welcome to MentorMee</h1>
          <p>Connecting learners and mentors globally.</p>
          <Button href="/login" variant="primary">Login</Button>
          <Button href="/signup" variant="secondary" className="ml-2">Sign Up</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
