import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import theme from "../theme";

import {
  MaxWidthContainer,
  PageContainer,
  DesktopTableHeader,
  ListContainer,
} from "./commonStyled";

const Teams = ({ teams }) => {
  return (
    <MaxWidthContainer>
      <PageContainer>
        <PageTitle>Teams</PageTitle>

        <ListContainer>
          <DesktopTableHeader>
            <Name>Name</Name>
            <Stadium>Stadium</Stadium>
            <Capacity>Capacity</Capacity>
          </DesktopTableHeader>

          {teams.map((team) => (
            <Team to={`/team/${team.id}`} key={team.name}>
              <Name>{team.name}</Name>
              <Stadium>{team.stadium}</Stadium>
              <Capacity>
                {team.capacity && team.capacity.toLocaleString()}
              </Capacity>
            </Team>
          ))}
        </ListContainer>
      </PageContainer>
    </MaxWidthContainer>
  );
};

const PageTitle = styled.h2`
  text-align: center;
`;

const Team = styled(Link)`
  display: flex;
  text-decoration: none;
  color: inherit;
  border-top: 1px solid ${theme.colors.listBorder};
  padding: 5px;

  @media only screen and (max-width: ${theme.maxWidthSmallScreen}) {
    font-size: 18px;
  }
`;

const Name = styled.div`
  width: 30%;

  @media only screen and (max-width: ${theme.maxWidthSmallScreen}) {
    width: 100%;
  }
`;

const Stadium = styled.div`
  width: 50%;

  @media only screen and (max-width: ${theme.maxWidthSmallScreen}) {
    display: none;
  }
`;

const Capacity = styled.div`
  width: 20%;

  @media only screen and (max-width: ${theme.maxWidthSmallScreen}) {
    display: none;
  }
`;

export default Teams;
