import { withProviders } from "./providers";

import { Routing } from "../pages";

import "./styles/index.scss";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div className="App position-absolute vh-100 w-100 bg-primary">
      <Routing />
    </div>
  );
};

export default withProviders(App);
