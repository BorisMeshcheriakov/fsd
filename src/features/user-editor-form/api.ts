import { AxiosResponse } from "axios";
import { Coach, Client } from "entities/user";
import { api } from "shared";
import { UserFields } from "./lib";

export const updateMe = (
  id: number,
  data: UserFields
): Promise<AxiosResponse<Coach | Client>> => {
  return api.patch(`/api/v1/users/user/${id}/updateme/`, data);
};
