import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import store from "./Redux/store";
import store from "./Redux/redux-store";
import { Provider } from "react-redux";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    {/* bind(store) означает, что при вызове dispatch , this = store, а не кнопке и тд */}
  </BrowserRouter>,
  document.getElementById("root")
);
