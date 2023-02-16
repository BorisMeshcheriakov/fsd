import { api } from "../../../shared";
import { AuthFields } from "./model";

export const login = (data: AuthFields) =>
  api.api.post("/api/v1/auth/rest-auth/login/", data);
