import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux"; // Import Provider from react-redux for Redux store
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate for Redux-persist
import { store, persistor } from "./redux/store.js"; // Import Redux store and persistor

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap the entire application with Provider to provide Redux store */}
    <Provider store={store}>
      {/* Wrap the App component with PersistGate to persist Redux store */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
