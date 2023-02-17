import { api } from "shared";

export const getUser = () => api.get("/api/v1/users/i_am/");
