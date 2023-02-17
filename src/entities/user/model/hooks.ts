import React from "react";
import { hooks } from "shared";
import { getUser } from "./api";

export const useAuthStatus = () => {
  const { getCookie } = hooks.useCookie();
  const token = getCookie("token");

  return {
    isAuth: !!token,
  };
};

export const useLoadUser = () => {
  const { isAuth } = useAuthStatus();
  const [status, setStatus] = React.useState<"idle" | "loading" | "loaded">(
    "idle"
  );

  React.useEffect(() => {
    const getUserData = async (
      status: "loading" | "idle" | "loaded",
      isAuth: boolean
    ) => {
      if (!isAuth || status === "loading" || status === "loaded") return;

      setStatus("loading");
      try {
        const response = await getUser();
        console.log(response);
      } catch (error) {}
      setStatus("loaded");
    };

    getUserData(status, isAuth);
  }, [isAuth, status]);

  return {};
};
