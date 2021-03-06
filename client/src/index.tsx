import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { store } from "./providers/app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./pages/App";
import { SignUpPage } from "./pages/signup";
import { LoginPage } from "./pages/login";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { Dashboard } from "./pages/dashboard";
import { CreateForm } from "./pages/CreateForm";
import { setContext } from "@apollo/client/link/context";
import { Results } from "./components/results";
import EditForm from "./pages/EditForm";
import { Form } from "./pages/form";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);

const httpLink = createHttpLink({
  uri: "http://localhost:7000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  // headers: {
  //   authorization: "Bearer " + token
  // }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/createForm" element={<CreateForm />} />
              <Route path="/results" element={<Results />} />
              <Route path="/editForm" element={<EditForm />} />
              <Route path="form/:id" element={<Form />} />
            </Routes>
          </BrowserRouter>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
