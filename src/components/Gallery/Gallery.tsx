import React from "react";
import styled from "styled-components";

import { ProductsList } from "../ProductsList";

const StyledGallery = styled.section`
  background-color: #fdf0e9;
`;

export const Gallery: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  return (
    <StyledGallery className="products">
      {isMobile ? <FilterDropdown /> : <FilterMenu />}
      <ProductsList />
    </StyledGallery>
  );
};

export const FilterMenu: React.FC = () => {
  return <div>FilterMenu</div>;
};

export const FilterDropdown: React.FC = () => {
  return <div>FilterDrop</div>;
};
