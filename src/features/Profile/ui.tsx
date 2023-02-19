import { LoginButton } from "entities/auth";
import { Menu } from "entities/user";
import { useAuthStatus } from "entities/user/model";
import React from "react";

type Props = {};

export const Profile = (props: Props) => {
  const { isAuth } = useAuthStatus();
  return <>{isAuth ? <Menu /> : <LoginButton />}</>;
};
