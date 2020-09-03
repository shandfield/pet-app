import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Animal from "./pages/Animal";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import LandingPage from "./pages/LandingPage";
import PetNav from "./components/Nav";
import UserPets from "./pages/UserPets";


function App() {
  return (

    <Router>
      <div>
        <PetNav />
        <Switch>
          <Route exact path="/">
             <LandingPage />
          </Route>
          <Route exact path="/animal">
            <Animal />
          </Route>
          <Route exact path="/UserPets">
            <UserPets />
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
