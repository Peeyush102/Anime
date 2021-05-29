import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import NavBarBoot from "./Components/ShowNames/navBarBoot";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowQuotes from "./Components/showQuotes/showQuotes";
import errorPage from "./Components/404Page/errorPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
// import NewNavbar from "./Components/NewSide/newSide";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <NavBarBoot />
          {/* <NewNavbar /> */}
          <Header />
          <Switch>
            <Route exact path="/" component={ShowQuotes} />
            <Route path="*" component={errorPage} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
