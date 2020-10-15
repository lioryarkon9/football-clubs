import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import teams from "../premierLeagueTeams.json";

import arsenalStaff from "../staffs/arsenal.json";
import astonVillaStaff from "../staffs/astonVilla.json";
import brightonStaff from "../staffs/brighton.json";
import burnleyStaff from "../staffs/bunley.json";
import chelseaStaff from "../staffs/chelsea.json";
import crystalPalaceStaff from "../staffs/crystalPalace.json";
import evertonStaff from "../staffs/everton.json";
import fulhamStaff from "../staffs/fulham.json";

import Teams from "./Teams.page";
import Team from "./Team.page";

const appTeamsIds = [1, 2, 131, 43, 4, 6, 7, 34]

const footballTeams = teams.reduce((teamsById, currentTeam) => {
  if (appTeamsIds.includes(currentTeam.id)) {
    teamsById[currentTeam.id] = {
      id: currentTeam.id,
      name: currentTeam.name,
      stadium: `${currentTeam.grounds[0].name}, ${currentTeam.grounds[0].city}`,
      capacity: currentTeam.grounds[0].capacity,
      websiteUrl: currentTeam.metadata.communities_URL,
      logoId: currentTeam.altIds.opta,
    };
  }
  return teamsById;
}, {});

const players = [
  ...arsenalStaff.players.map(player => ({...player, teamId: arsenalStaff.team.id})),
  ...astonVillaStaff.players.map(player => ({...player, teamId: astonVillaStaff.team.id})),
  ...brightonStaff.players.map(player => ({...player, teamId: brightonStaff.team.id})),
  ...burnleyStaff.players.map(player => ({...player, teamId: burnleyStaff.team.id})),
  ...chelseaStaff.players.map(player => ({...player, teamId: chelseaStaff.team.id})),
  ...crystalPalaceStaff.players.map(player => ({...player, teamId: crystalPalaceStaff.team.id})),
  ...evertonStaff.players.map(player => ({...player, teamId: evertonStaff.team.id})),
  ...fulhamStaff.players.map(player => ({...player, teamId: fulhamStaff.team.id}))
]

const footballPlayers = players.map((player) => ({
  shirtNumber: player.info.shirtNum,
  teamId: player.teamId,
  name: `${player.name.first} ${player.name.last}`,
}));

console.log(JSON.stringify(footballTeams));

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
