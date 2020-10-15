import React from "react";
import styled from "styled-components";

import theme from "../theme";

const ClubDetail = ({ label, value }) => {
  const { href, text } = typeof value === "object" ? value : {};

  return (
    <Container>
      <Label>{label}</Label>
      {href ? (
        <a rel="no referrer" target="_blank" href={href}>
          {text}
        </a>
      ) : (
        <div>{value}</div>
      )}
    </Container>
  );
};

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Container = styled.div`
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

export default ClubDetail;
