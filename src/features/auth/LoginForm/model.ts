import { SubmitHandler } from "react-hook-form/dist/types/form";
import { useForm } from "react-hook-form";
import { login } from "./api";
import { useAuthModal } from "../AuthModal";
import { hooks } from "../../../shared";

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
      setCookie("key", response.data.key, { expires: 7 });
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
