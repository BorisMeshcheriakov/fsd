import { hooks } from "shared";
import { logout as logoutReq } from "./api";

export const useLogout = () => {
  const { removeCookie } = hooks.useCookie();
  const logout = async () => {
    try {
      await logoutReq();
      removeCookie("token");
      window.location.reload();
    } catch (error) {}
  };
  return {
    logout,
  };
};
