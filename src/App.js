import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowQuotes from "./Components/showQuotes/showQuotes";
import ShowNames2 from "./Components/ShowNames/showNames2";
import ShowSpecificQuotes from "./Components/showSpecificQuotes/showSpecificQuotes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={ShowQuotes} />
          <Route exact path="/" component={ShowNames2} />
          <Route exact path="/anime" component={ShowSpecificQuotes} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
