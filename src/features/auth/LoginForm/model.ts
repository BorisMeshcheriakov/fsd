import { SubmitHandler } from "react-hook-form/dist/types/form";
import { useForm } from "react-hook-form";

type AuthFields = {
  phonenumber: string;
  password: string;
};

export const useAuthForm = () => {
  const { register, handleSubmit } = useForm<AuthFields>();

  const onSubmit: SubmitHandler<AuthFields> = (data) => {
    const regexPhone = /\s+|\(|\)|-/g;
    console.log(data);
    console.log(data.phonenumber.replace(regexPhone, ""));
  };
  return {
    register,
    submit: handleSubmit(onSubmit),
  };
};
