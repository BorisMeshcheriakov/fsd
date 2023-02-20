import { useLoadUser } from "entities/user";

export const withInitial = (component: () => React.ReactNode) => () => {
  useLoadUser();

  return <>{component()}</>;
};
