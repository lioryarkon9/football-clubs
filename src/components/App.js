import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Teams from "./Teams.page";
import Team from "./Team.page";

const App = () => {
  const [teams, setTeams] = useState();
  const [players, setPlayers] = useState();

  useEffect(function fetchTeamsAndPlayer () {
    (async () => {
      const teamsRequest = await fetch("https://run.mocky.io/v3/884773b8-6c42-4c82-b1fe-3684f01baa65");
      const teamsResponse = await teamsRequest.json();

      const playersRequest = await fetch("https://run.mocky.io/v3/05000676-0702-4eb8-b656-80b1582ca2a1");
      const playersReponse = await playersRequest.json();

      setTeams(teamsResponse);
      setPlayers(playersReponse);
    })() 
  }, []);

  if (!teams || !players) {
    return null;
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Redirect to="/teams" />} />
        <Route
          path="/teams"
          component={() => <Teams teams={Object.values(teams)} />}
        />
        <Route
          path="/team/:teamId"
          component={({ match }) => (
            <Team
              currentTeam={teams[match.params.teamId]}
              players={players.filter(
                (player) => player.teamId == match.params.teamId
              )}
            />
          )}
        />
        <Route path="*" component={() => <h2>OOPS: Page Not Found:-(</h2>} />
      </Switch>
    </Router>
  );
}

export default App;
