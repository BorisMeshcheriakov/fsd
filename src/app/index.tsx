import { withProviders } from "./providers";

import { useLoadUser } from "entities/user";

import { Header } from "../widgets/header";
import { Routing } from "../pages";

import "./styles/index.scss";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  useLoadUser();

  return (
    <div className="App position-absolute vh-100 w-100 bg-light">
      <Header />
      <Routing />
    </div>
  );
};

export default withProviders(App);
