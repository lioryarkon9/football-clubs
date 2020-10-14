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
import Team from "./Team.page";

const footballTeams = teams.reduce((teamsById, currentTeam) => {
  teamsById[currentTeam.id] = { ...currentTeam };

  return teamsById;
}, {});

console.log("teams:", footballTeams);
console.log("players:", players);

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={() => <Redirect to="/teams" />} />
      <Route path="/teams" component={() => <Teams teams={teams} />} />
      <Route
        path="/team/:teamId"
        component={({ match }) => (
          <Team currentTeam={footballTeams[match.params.teamId]} />
        )}
      />
      <Route path="*" component={() => <h2>OOPS: Page Not Found:-(</h2>} />
    </Switch>
  </Router>
);

export default App;
