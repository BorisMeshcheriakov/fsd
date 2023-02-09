import { withProviders } from "./providers";

import "./styles/index.scss";

const App = () => {
  return (
    <div className="App">
      <div>test app</div>
    </div>
  );
};

export default withProviders(App);
