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

    const userData = new FormData();

    userData.append("last_name", data.last_name);
    userData.append("first_name", data.first_name);
    userData.append("middle_name", data.middle_name);

    if (data["photo"][0]) userData.append("photo", data["photo"][0]);

    try {
      const response = await updateMe(user.user.id, userData);
      updateUser({ ...user, user: response.data });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    register,
    submit: handleSubmit(onSubmit),
  };
};
