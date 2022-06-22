import React from "react";

import styled from "styled-components";

import { Header } from "./components/Header";

const StyledApp = styled.div`
  min-height: 100vh;
`;

const App: React.FC = () => {
  return (
    <StyledApp>
      <Header />
    </StyledApp>
  );
};

export default App;
