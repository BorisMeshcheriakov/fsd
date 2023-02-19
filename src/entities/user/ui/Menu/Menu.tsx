import { useLogout } from "entities/auth";

import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

type Props = {};

export const Menu: React.FC<Props> = () => {
  // TODO Add user image

  const { logout } = useLogout();
  return (
    <DropdownButton id="dropdown-basic-button" title="Меню" align="end">
      <Dropdown.Item href="/profile">Профиль</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={logout}>Выйти</Dropdown.Item>
    </DropdownButton>
  );
};
