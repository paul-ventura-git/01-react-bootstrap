import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup01 from './InputGroup01';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MainForm() {
  return (
    <Container className='my-form justify-content-between'>
      <Card>
        <Card.Header>Bitte füllen Sie das Formular aus</Card.Header>
        <Card.Body>
          <Card.Title>Neue Produkte einführen</Card.Title>
            <Row>
              <Col>
                <InputGroup01></InputGroup01>
              </Col>
              <Col>
                <InputGroup01></InputGroup01>
              </Col>
            </Row>
          <Button variant="primary">Hinzufügen</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MainForm;