import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TextControlsExample() {
  return (
    <Form>
      
      <Form.Group className="mb-3" controlId="input Nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre Completo" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="input Correo">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control type="email" placeholder="Indroduce tu Correo" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="input area de texto">
        <Form.Label>Comentarios</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="secondary" size="lg" active>
        Enviar
      </Button>
    </Form>
  );
}

export default TextControlsExample;
