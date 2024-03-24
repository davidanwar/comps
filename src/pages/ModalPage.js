import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <Button primary onClick={handleClose}>
      Close Modal
    </Button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is important agreement for you</p>
    </Modal>
  );
  return (
    <div>
      <Button primary onClick={handleClick}>
        Open
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
