import { AxiosResponse } from "axios";
import { User } from "entities/user";
import { api } from "shared";

export const updateMe = (
  id: number,
  data: FormData
): Promise<AxiosResponse<User>> => {
  return api.patch(`/api/v1/users/user/${id}/updateme/`, data);
};
