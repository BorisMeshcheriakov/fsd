import { useUser } from "entities/user";
import { useForm } from "react-hook-form";
import { updateMe } from "./api";
import { UserFields } from "./lib";

export const useProfileForm = () => {
  const { user, updateUser } = useUser();
  const { register, handleSubmit } = useForm<UserFields>({
    defaultValues: {
      last_name: user?.user.last_name,
      first_name: user?.user.first_name,
      middle_name: user?.user.middle_name,
    },
  });

  const onSubmit = async (data: UserFields) => {
    if (!user) return;
    console.log(data);

    try {
      const response = await updateMe(user.user.id, data);
      updateUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    register,
    submit: handleSubmit(onSubmit),
  };
};
