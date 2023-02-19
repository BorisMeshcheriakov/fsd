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
  const { setItem, removeItem } = hooks.useLocalStorage();
  const [status, setStatus] = React.useState<"idle" | "loading" | "loaded">(
    "idle"
  );

  React.useEffect(() => {
    const getUserData = async (
      status: "loading" | "idle" | "loaded",
      isAuth: boolean
    ) => {
      if (!isAuth) removeItem("user");
      if (status === "loading" || status === "loaded") return;

      setStatus("loading");
      try {
        const response = await getUser();
        setItem("user", response.data);
        console.log(response);
      } catch (error) {
        removeItem("user");
      }
      setStatus("loaded");
    };

    getUserData(status, isAuth);
  }, [isAuth, status, setItem, removeItem]);

  return {};
};

interface User {
  last_name: string;
  first_name: string;
  middle_name: string;
  photo: string;
}

export const useUser = () => {
  const { getItem } = hooks.useLocalStorage();
  const user = getItem<User>("user");

  return {
    user,
  };
};
