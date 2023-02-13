import React from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";
import { useAuthModal } from "./model";

export const AuthModal: React.FC = () => {
  const { isOpen, toggle } = useAuthModal();
  return (
    <Modal show={isOpen} onHide={toggle} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggle}>
          Close
        </Button>
        <Button variant="primary" onClick={toggle}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
