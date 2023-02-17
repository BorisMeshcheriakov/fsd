import { AuthModal } from "features/auth";

export const withModal = (component: () => React.ReactNode) => () => {
  return (
    <>
      {component()}
      <AuthModal />
    </>
  );
};
