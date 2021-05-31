import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ErrorPage from "./Components/404Page/ErrorPage";
import Loading from "./Components/LoadingComponent/loading";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ShowNames = lazy(() => import("./Components/ShowNames/ShowNames"));
const ShowQuotes = lazy(() => import("./Components/showQuotes/ShowQuotes"));
const Header = lazy(() => import("./Components/Header/Header"));
const Footer = lazy(() => import("./Components/Footer/Footer"));

/*
 *A website to display the Anime Quotes on basis of anime shows.
 */

function App() {
  return (
    <Suspense fallback={Loading()}>
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <ShowNames />
            <Route exact path="/" component={Header} />
            <Switch>
              <Route exact path="/" component={ShowQuotes} />
              <Route path="*" component={ErrorPage} />
            </Switch>
            <Route exact path="/" component={Footer} />
          </div>
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default App;
