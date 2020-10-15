import styled from "styled-components";

import theme from "../theme";

export const PageContainer = styled.div`
  flex-grow: 1;
  padding: 5px;
  max-width: ${theme.maxWidthWideScreen};
  color: ${theme.colors.text};
`;

export const MaxWidthContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const DesktopTableHeader = styled.div`
  @media only screen and (max-width: ${theme.maxWidthSmallScreen}) {
    display: none;
  }

  display: flex;
  padding-bottom: 5px;
`;

export const ListContainer = styled.div`
  background-color: ${theme.colors.uiItemBackground};
  border-radius: ${theme.borderRadius};
  padding: 10px;
`;
