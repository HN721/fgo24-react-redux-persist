import { useState } from "react";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Form from "./components/Form";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="w-full h-screen grid ">
          <Logo />
          <Form />
          <PackingList />
          <Stats />
        </div>
      </PersistGate>
    </Provider>
  );
}
