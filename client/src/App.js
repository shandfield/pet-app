import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Animal from "./pages/Animal";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
<<<<<<< HEAD
import LandingPage from "./components/LandingPage";

// import LoginButton from "./components/LogIn/loginbutton";
// import LogoutButton from "./components/LogOut/logoutbutton";
import Nav from "./components/Nav";
=======
import PetNav from "./components/Nav";
>>>>>>> master


function App() {
  return (

    <Router>
      <LandingPage />
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
