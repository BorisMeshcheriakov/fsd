import { SubmitHandler } from "react-hook-form/dist/types/form";
import { useForm } from "react-hook-form";
import { login } from "./api";

export type AuthFields = {
  phonenumber: string;
  password: string;
};

export const useAuthForm = () => {
  // TODO Отключение кнопок и полей на время запроса
  const { register, handleSubmit } = useForm<AuthFields>();

  const onLogin = async (data: AuthFields) => {
    try {
      const response = await login(data);
      console.log(response);
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
