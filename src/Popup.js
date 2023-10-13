import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function Example() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
        <Button style={{backgroundColor:" rgb(70, 130, 191)"}} onClick={handleShow}>
        Hire Me
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Contact Me</Modal.Title>
          </Modal.Header>
          <Modal.Body>
        <p>CONTACT</p> 
<p>(+91)9061990236</p>
<p>Wayanad, Kerala</p>
<p>akashsajixyz@gmail.com</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

  