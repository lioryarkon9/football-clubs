import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import theme from "../theme";

const Teams = ({teams}) => {
  return (
    <MaxWidthContainer>
      <PageContainer>
        <PageTitle>Teams</PageTitle>

        <TeamsContainer>
          <DesktopTableHeader>
            <Name>Name</Name>
            <Stadium>Stadium</Stadium>
            <Capacity>Capacity</Capacity>
          </DesktopTableHeader>

          {teams.map(team => (
            <Team to={`/team/${team.id}`} key={team.name}>
              <Name>{team.name}</Name>
              <Stadium>{`${team.grounds[0].name}, ${team.grounds[0].city}`}</Stadium>
              <Capacity>{team.grounds[0].capacity && team.grounds[0].capacity.toLocaleString()}</Capacity>
            </Team>
          ))}
        </TeamsContainer>
      </PageContainer>
    </MaxWidthContainer>
  );
};

const Team = styled(Link)`
  display: flex;
  text-decoration: none;
  color: inherit;
  border-top: 1px solid;
  padding: 5px;

  @media only screen and (max-width: ${theme.maxWidthSmallScreen}) {
    font-size: 18px;
  }
`;

const TeamsContainer = styled.div`
  background-color: ${theme.colors.listBackground};
  border-radius: ${theme.borderRadius};
  padding: 10px;
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

const DesktopTableHeader = styled.div`
  @media only screen and (max-width: ${theme.maxWidthSmallScreen}) {
    display: none;
  }

  display: flex;
  padding-bottom: 5px;
`;

const PageTitle = styled.h2`
  text-align: center;
`;

const PageContainer = styled.div`
  flex-grow: 1;
  padding: 5px;
  max-width: 1700px;
  color: #172b4d;
`;

const MaxWidthContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const formattedWithCommas = potentiallyLongNumber => {
  const stringified = potentiallyLongNumber.toString();

  if (stringified.length <= 3) {
    return stringified;
  } 

  let result = "";

  for (let i = stringified.length - 1; i > 0; i--) {
    result += stringified[i];

    if ((i + 1) % 3 === 0) {
      result += ",";
    }
  }

  return result;
};

export default Teams;
