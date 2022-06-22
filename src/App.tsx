import React from "react";

import styled from "styled-components";

import { Header } from "./components/Header";
import { Showcase } from "./components/Showcase";

const StyledApp = styled.div`
  min-height: 100vh;
`;

const App: React.FC = () => {
  return (
    <StyledApp>
      <Header />
      <Showcase />
    </StyledApp>
  );
};

export default App;
