import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Animal from "./pages/Animal";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import PetNav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <PetNav />
        <Switch>
          <Route exact path={["/", "/animal"]}>
            <Animal />
          </Route>
          <Route exact path="/animal/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// import { Button } from 'reactstrap';
