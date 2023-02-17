import { useAuthStatus } from "entities/user/model";
import React from "react";
import Button from "react-bootstrap/esm/Button";

type Props = {
  onLogin: () => void;
  onLogout: () => void;
};

export const Avatar: React.FC<Props> = ({ onLogin, onLogout }) => {
  const { isAuth } = useAuthStatus();
  // TODO Add user image

  const getAction = () => {
    return isAuth ? onLogout : onLogin;
  };
  return (
    <Button variant="light" onClick={getAction()}>
      {isAuth ? "Выйти" : "Войти"}
    </Button>
  );
};
