import Button from "react-bootstrap/esm/Button";
import { useAuthModal } from "../model";

export const LoginButton = () => {
  const { toggle } = useAuthModal();

  return (
    <Button variant="light" onClick={toggle}>
      Войти
    </Button>
  );
};
