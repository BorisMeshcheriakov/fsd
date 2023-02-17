import { SubmitHandler } from "react-hook-form/dist/types/form";
import { useForm } from "react-hook-form";
import { login } from "./api";
import { useAuthModal } from "../AuthModal";
import { hooks, api } from "shared";

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
      api.interceptors.request.use((config) => {
        config.headers.Authorization = `Token ${token}`;
        return config;
      });
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
