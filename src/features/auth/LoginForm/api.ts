import { api } from "../../../shared";
import { AuthFields } from "./model"; // FIXME циклическая зависимость

export const login = async (data: AuthFields) =>
  await api.api.post<{ key: string }>("/api/v1/auth/rest-auth/login/", data);
