import { Button, Modal } from 'react-bootstrap';
import { useState } from "react";
import ModalData from './ModalData';

const CoinData = ({name, description, shortHand }) => {
  const [show, setShow] = useState(false);

  return (
    <>    
        <Button 
            className="button button__primary " 
            variant="light" 
            onClick={() => setShow(true)}
            >Display Data
        </Button>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-size"
          aria-labelledby="example-custom-modal-styling-title">
          <Modal.Header closeButton>
            <Modal.Title className="title_text" id="example-custom-modal-styling-title">
              {name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <ModalData description={description} shortHand={shortHand} />
          </Modal.Body>
        </Modal>
 
    </>
  );
  
}

export default CoinData;