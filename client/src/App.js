import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Animal from "./pages/Animal";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import LandingPage from "./pages/LandingPage";
import PetNav from "./components/Nav";
import UserPets from "./pages/UserPets";
import Planner from "./pages/Calendar";


function App() {
  return (

    <Router>
      <div>
        <PetNav />
        <Switch>
          <Route exact path="/" component={LandingPage}>
          </Route>
          <Route exact path="/animal" component={Animal}>
          </Route>
          <Route exact path="/UserPets" component={UserPets}>
          </Route>
          <Route exact path="/animal/:id" component={Detail}>
          </Route>
          <Route exact path= "/calendar" component={Planner}>
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
