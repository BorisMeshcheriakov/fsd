export const useLocalStorage = () => {
  const setItem = <T>(key: string, data: T) => {
    try {
      const value = JSON.stringify(data);
      localStorage.setItem(key, value);
    } catch (error) {
      console.error(error);
    }
  };

  const removeItem = (key: string) => localStorage.removeItem(key);

  const getItem = <T>(key: string): T | undefined => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : undefined;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    setItem,
    getItem,
    removeItem,
  };
};
