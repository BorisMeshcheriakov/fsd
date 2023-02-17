import { api } from "shared";
import { AuthFields } from "./model"; // FIXME циклическая зависимость

export const login = (data: AuthFields) =>
  api.post<{ key: string }>("/api/v1/auth/rest-auth/login/", data);
