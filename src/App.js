import "./App.css";
import { GlobalStyle } from "./assets/styled";
import Home from "./components/Home";
import Service from "./components/Service";
import ServiceGtS from "./components/ServiceGtS";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}><Home /></Route>
          <Route exact path="/services" component={Service}><Service /></Route>
          <Route exact path="/servicesGtS" component={ServiceGtS}><ServiceGtS /></Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
