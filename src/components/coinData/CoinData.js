import { Button, Modal, Image } from 'react-bootstrap';
import { useState } from "react";
import Coin from "../coin/Coin";

const CoinData = () => {
  const [show, setShow] = useState(false);

  return (
    <>
    <Image src="https://place-puppy.com/300x300" />
       <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            BitCoin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Coin />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CoinData;