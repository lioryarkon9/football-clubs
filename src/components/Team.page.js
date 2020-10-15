import React from "react";
import styled from "styled-components";

import theme from "../theme";

import { MaxWidthContainer, PageContainer, DesktopTableHeader, ListContainer } from "./commonStyled";

// https://resources.premierleague.com/premierleague/badges/70/${currentTeam.logoId}.png

const Team = ({ currentTeam, players }) => {
  return (
    <MaxWidthContainer>
      <PageContainer>
        <PageTitle>
          <span>{currentTeam.name}</span>{" "}
          <img
            alt="team-logo"
            src=""
          />
        </PageTitle>

        <ClubDetails>
          <ClubDetail>
            <Label>Stadium</Label>
            <div>
              {currentTeam.stadium}
            </div>
          </ClubDetail>

          <ClubDetail>
            <Label>Capacity</Label>
            <div>
              {currentTeam.capacity &&
                currentTeam.capacity.toLocaleString()}
            </div>
          </ClubDetail>

          <ClubDetail>
            <Label>Website</Label>
            <a rel="noopener noreferrer" target="_blank" href={currentTeam.websiteUrl}>
              {currentTeam.name} official website
            </a>
          </ClubDetail>
        </ClubDetails>

        <ListContainer>
          <DesktopTableHeader>
            <ShirtNumber>No.</ShirtNumber>
            <PlayerName>Name</PlayerName>
          </DesktopTableHeader>

          {players.map(player => (
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

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const ClubDetail = styled.div`
  background-color: ${theme.colors.uiItemBackground};
  border-radius: ${theme.borderRadius};
  width: 30%;
  box-shadow: 0 0 2px 0;
  padding: 10px;

  @media only screen and (max-width: ${theme.maxWidthSmallScreen}) {
    width: 100%;
    margin-top: 10px;
  }
`;

const ClubDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media only screen and (max-width: ${theme.maxWidthSmallScreen}) {
    flex-wrap: wrap;
  }
`;

const PageTitle = styled.h3`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default Team;
