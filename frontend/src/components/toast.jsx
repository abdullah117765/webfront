import React  from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect , useState } from 'react';

export default function Toast2() {

  const [show, setShow] = useState(true);
  const handleClose = () =>{ setShow(false); }
  const handleShow = () =>{ setShow(true); }

 
  

    return (
        <div> 
<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>ALERT!!</Modal.Title>
</Modal.Header>
<Modal.Body>Are you sure you want to Delete the food item?</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    no
  </Button>
  <Button variant="primary"  onClick={handleClose}> 
    yes
  </Button>
</Modal.Footer>
</Modal> 
  
</div>


);



}