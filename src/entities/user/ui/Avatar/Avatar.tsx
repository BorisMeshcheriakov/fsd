import React from "react";
import Button from "react-bootstrap/esm/Button";

import { useAuthModal } from "../../../../features/auth";

type Props = {};

export const Avatar = (props: Props) => {
  const { toggle } = useAuthModal();
  return (
    <Button variant="light" onClick={toggle}>
      Войти
    </Button>
  );
};
