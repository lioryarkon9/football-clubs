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
