import React from "react";
import { hooks } from "shared";

type Props = {};

export const useLoadUser = (props: Props) => {
  return {};
};

export const useAuthStatus = () => {
  const { getCookie } = hooks.useCookie();
  const token = getCookie("token");

  return {
    isAuth: !!token,
  };
};
