import { compose } from "redux";
import { withRouter } from "./with-router";
import { withStore } from "./with-store";
import { withModal } from "./with-modal";

export const withProviders = compose<React.FunctionComponent>(
  withStore,
  withRouter,
  withModal
);
