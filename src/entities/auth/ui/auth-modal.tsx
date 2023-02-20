import React from "react";
import Modal from "react-bootstrap/esm/Modal";
import { useAuthModal } from "../model";
import { LoginForm } from "./login-form";

export const AuthModal: React.FC = () => {
  const { isOpen, toggle } = useAuthModal();
  return (
    <Modal show={isOpen} onHide={toggle} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Авторизация</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginForm />
      </Modal.Body>
    </Modal>
  );
};
