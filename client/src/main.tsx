import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import store from "./store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
