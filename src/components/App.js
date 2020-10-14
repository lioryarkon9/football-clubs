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
  teamsById[currentTeam.id] = {
    id: currentTeam.id,
    name: currentTeam.name,
    stadium: `${currentTeam.grounds[0].name}, ${currentTeam.grounds[0].city}`,
    capacity: currentTeam.grounds[0].capacity,
    websiteUrl: currentTeam.metadata.communities_URL,
    logoId: currentTeam.altIds.opta,
  };

  return teamsById;
}, {});

const footballPlayers = players.map((player) => ({
  shirtNumber: player.info.shirtNum,
  teamId: player.currentTeam ? player.currentTeam.id : null,
  name: `${player.name.first} ${player.name.last}`,
}));

console.log("teams:", footballTeams);
console.log("players:", players);

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={() => <Redirect to="/teams" />} />
      <Route
        path="/teams"
        component={() => <Teams teams={Object.values(footballTeams)} />}
      />
      <Route
        path="/team/:teamId"
        component={({ match }) => (
          <Team
            currentTeam={footballTeams[match.params.teamId]}
            players={footballPlayers.filter(
              (player) => player.teamId == match.params.teamId
            )}
          />
        )}
      />
      <Route path="*" component={() => <h2>OOPS: Page Not Found:-(</h2>} />
    </Switch>
  </Router>
);

export default App;
