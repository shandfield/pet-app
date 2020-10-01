import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Animal from "./pages/Animal";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import LandingPage from "./pages/LandingPage";
import PetNav from "./components/Nav";
import UserPets from "./pages/UserPets";
import Planner from "./pages/Calendar";
import UpdateAnimal from "./pages/Update";


function App() {
  return (

    <Router>
      <div>
        <PetNav />
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/animal" component={Animal}/>
          <Route exact path="/UserPets" component={UserPets}/>
          <Route exact path="/animal/:id" component={Detail}/>
          <Route exact path= "/animal/update/:animalId" component={UpdateAnimal}/>
          <Route exact path= "/calendar" component={Planner}/>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
