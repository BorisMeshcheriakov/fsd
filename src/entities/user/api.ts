import { AxiosResponse } from "axios";
import { api } from "shared";
import { User } from "./lib";

export const getUser = () =>
  api.get<AxiosResponse<User>>("/api/v1/users/i_am/");
