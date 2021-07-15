
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import WeAre from "./pages/WeAre";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route exact path="/WeAre" component={WeAre}>
          <WeAre />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
