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
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Dashboard } from "./pages/dashboard";

import { CreateForm } from "./pages/CreateForm";
import { Preview } from "./components/preview";
import { Results } from "./pages/results";

// import { useAppSelector } from "./providers/app/hooks";
// React hooks can't be called at top level. So, add header when calling query through
// context and modifying header
// const token = useAppSelector((state)=> state.token.token)

const client = new ApolloClient({
  uri: "http://localhost:7000/graphql",
  cache: new InMemoryCache(),
  // headers: {
  //   authorization: "Bearer " + token
  // }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/createForm" element={<CreateForm />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
