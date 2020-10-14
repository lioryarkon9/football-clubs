import React from "react";
import styled from "styled-components";

import theme from "../theme";

import { MaxWidthContainer, PageContainer } from "./commonStyled";

const Team = ({ currentTeam }) => {
  return (
    <MaxWidthContainer>
      <PageContainer>
        <PageTitle>
          <span>{currentTeam.name}</span>{" "}
          <img
            src={`https://resources.premierleague.com/premierleague/badges/70/${currentTeam.altIds.opta}.png`}
          />
        </PageTitle>

        <ClubDetails>
          <ClubDetail>
            <Label>Stadium</Label>
            <div>
              {currentTeam.grounds[0].name}, {currentTeam.grounds[0].city}
            </div>
          </ClubDetail>

          <ClubDetail>
            <Label>Capacity</Label>
            <div>
              {currentTeam.grounds[0].capacity &&
                currentTeam.grounds[0].capacity.toLocaleString()}
            </div>
          </ClubDetail>

          <ClubDetail>
            <Label>Website</Label>
            <a target="_blank" href={currentTeam.metadata.communities_URL}>
              {currentTeam.name} official website
            </a>
          </ClubDetail>
        </ClubDetails>
      </PageContainer>
    </MaxWidthContainer>
  );
};

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
