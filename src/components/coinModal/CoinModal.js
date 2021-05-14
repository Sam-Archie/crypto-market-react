import { Button, Modal, Image } from 'react-bootstrap';
import { useState } from "react";
import Coin from "../coin/Coin";

const CoinData = ({coin}) => {
  const [show, setShow] = useState(false);

  return (
    <>
       <Button className="button_modal" variant="primary" onClick={() => setShow(true)}>
        Display Data
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-size"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title className="title_text" id="example-custom-modal-styling-title">
            {coin}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Coin coin={coin}/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CoinData;