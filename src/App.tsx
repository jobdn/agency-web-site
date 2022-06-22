import React from "react";

import styled from "styled-components";

import { Header } from "./components/Header";
import { Showcase } from "./components/Showcase";
import { Gallery } from "./components/Gallery";

const StyledApp = styled.div`
  min-height: 100vh;
`;

const App: React.FC = () => {
  return (
    <StyledApp>
      <Header />
      <Showcase />
      <Gallery />
    </StyledApp>
  );
};

export default App;
