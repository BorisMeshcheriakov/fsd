import { api } from "shared";

export const logout = () => {
  return api.post("/api/v1/auth/rest-auth/logout/");
};
