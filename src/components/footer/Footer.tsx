import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className="text-end p-3">
          Copyright © 2024. All rights reserved.
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
