import { createAction, createReducer } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { SubmitHandler } from "react-hook-form/dist/types/form";
import { useForm } from "react-hook-form";
import { login } from "./api";
import { logout as logoutReq } from "./api";
import { hooks } from "shared";

interface AuthModalState {
  isOpen: boolean;
}

const initialState = { isOpen: false } as AuthModalState;
const toggleAction = createAction("auth/toggle");

export const authModalReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleAction, (state, action) => {
    state.isOpen = !state.isOpen;
  });
});

export const useAuthModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: AuthModalState) => state.isOpen);

  const toggle = () => dispatch(toggleAction());

  return {
    isOpen,
    toggle,
  };
};

export type AuthFields = {
  phonenumber: string;
  password: string;
};

export const useAuthForm = () => {
  // TODO Отключение кнопок и полей на время запроса
  const { register, handleSubmit } = useForm<AuthFields>();

  const { toggle } = useAuthModal();
  const { setCookie } = hooks.useCookie();

  const onLogin = async (data: AuthFields) => {
    try {
      const response = await login(data);
      console.log(response);
      const token = response.data.key;
      setCookie("token", token, { expires: 7 });
      window.location.reload();
      toggle();
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit: SubmitHandler<AuthFields> = (data) => {
    const regexPhone = /\s+|\(|\)|-/g;
    const loginData = {
      ...data,
      phonenumber: data.phonenumber.replace(regexPhone, ""),
    };
    onLogin(loginData);
  };
  return {
    register,
    submit: handleSubmit(onSubmit),
  };
};

export const useLogout = () => {
  const { removeCookie } = hooks.useCookie();
  const logout = async () => {
    try {
      await logoutReq();
      removeCookie("token");
      window.location.reload();
    } catch (error) {}
  };
  return {
    logout,
  };
};
