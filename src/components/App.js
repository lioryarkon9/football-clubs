import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import players from "../premierLeaguePlayers.json";
import teams from "../premierLeagueTeams.json";

import Teams from "./Teams.page";

console.log("teams:", teams);
console.log("players:", players);

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={() => <Redirect to="/teams" />} />
      <Route path="/teams" component={() => (<Teams teams={teams}/>)} />
      <Route path="team/:id" component={() => <h2>team</h2>} />
      <Route path="*" component={() => <h2>OOPS: Page Not Found:-(</h2>} />
    </Switch>
  </Router>
);

export default App;
