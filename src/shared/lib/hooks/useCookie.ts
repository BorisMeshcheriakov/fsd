import Cookies from "js-cookie";

export const useCookie = () => {
  const setCookie = (
    key: string,
    value: string,
    options?: Cookies.CookieAttributes
  ) => {
    Cookies.set(key, value, options);
  };

  const getCookie = (key: string) => Cookies.get(key);

  const removeCookie = (key: string) => Cookies.remove(key);

  return {
    setCookie,
    getCookie,
    removeCookie,
  };
};
