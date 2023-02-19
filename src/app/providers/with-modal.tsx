import { AuthModal } from "entities/auth";

export const withModal = (component: () => React.ReactNode) => () => {
  return (
    <>
      {component()}
      <AuthModal />
    </>
  );
};
