import React from "react";
import styled from "styled-components";

import theme from "../theme";

import {
  MaxWidthContainer,
  PageContainer,
  DesktopTableHeader,
  ListContainer,
} from "./commonStyled";

import ClubDetail from "./ClubDetail";

const Team = ({ currentTeam, players }) => {
  return (
    <MaxWidthContainer>
      <PageContainer>
        <PageTitle>
          <div>{currentTeam.name}</div>
          <TeamLogo
            alt="team-logo"
            src={`https://resources.premierleague.com/premierleague/badges/70/${currentTeam.logoId}.png`}
          />
        </PageTitle>

        <ClubDetails>
          <ClubDetail label="Stadium" value={currentTeam.stadium} />

          <ClubDetail
            label="Capacity"
            value={
              currentTeam.capacity && currentTeam.capacity.toLocaleString()
            }
          />

          <ClubDetail
            label="Website"
            value={{
              href: currentTeam.websiteUrl,
              text: `${currentTeam.name} official website`,
            }}
          />
        </ClubDetails>

        <ListContainer>
          <DesktopTableHeader>
            <ShirtNumber>No.</ShirtNumber>
            <PlayerName>Name</PlayerName>
          </DesktopTableHeader>

          {players.map((player) => (
            <Player>
              <ShirtNumber>{player.shirtNumber}</ShirtNumber>
              <PlayerName>{player.name}</PlayerName>
            </Player>
          ))}
        </ListContainer>
      </PageContainer>
    </MaxWidthContainer>
  );
};

const TeamLogo = styled.img`
  position: absolute;
  right: 0;

  @media only screen and (max-width: ${theme.maxWidthSmallScreen}) {
    position: static;
  }
`;

const Player = styled.div`
  display: flex;
  border-top: 1px solid ${theme.colors.listBorder};
  padding: 5px;
`;

const ShirtNumber = styled.div`
  width: 10%;
`;

const PlayerName = styled.div`
  width: 90%;
`;

const ClubDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media only screen and (max-width: ${theme.maxWidthSmallScreen}) {
    flex-wrap: wrap;
  }
`;

const PageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 90px;
  font-size: 22px;
  font-weight: bold;

  @media only screen and (max-width: ${theme.maxWidthSmallScreen}) {
    justify-content: space-between;
  }
`;

export default Team;
