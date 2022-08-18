import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';
import QuickContact from './QuickContact';


export function EnquireModal(props) {
  return (
    <Modal className="enquire-container"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 className="enquire-container__heading-one">Contact Holidaze</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2 className="enquire-container__heading-two">Something on your mind, send us a message <i className="far fa-smile"></i></h2>
        <QuickContact />
      </Modal.Body>
    </Modal>
  );
}

export default function EnquireModalShow() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className="enquire-container__button" onClick={() => setModalShow(true)}>
        <i className="fas fa-paper-plane"></i> Quick question
      </Button>

      <EnquireModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}