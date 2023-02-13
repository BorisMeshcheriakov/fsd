import React from "react";
import Button, { ButtonProps } from "react-bootstrap/esm/Button";

export const Avatar: React.FC<ButtonProps> = (props) => {
  // TODO Add user image
  return (
    <Button variant="light" {...props}>
      Войти
    </Button>
  );
};
