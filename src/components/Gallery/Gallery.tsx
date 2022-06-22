import React from "react";
import styled from "styled-components";
import { useTypedSelector } from "../../store";
import { LoadMoreButton } from "../LoadMoreButton";

import { ProductsList } from "../ProductsList";

const StyledGallery = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 180px;
  @media screen and (max-width: 425px) {
    padding-bottom: 75px;
  }
`;

export const Gallery: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const { isLoading } = useTypedSelector((state) => state.products);
  return (
    <StyledGallery className="products">
      {isMobile ? <FilterDropdown /> : <FilterMenu />}
      <ProductsList />
      {isLoading ? "Products is loading..." : null}
      <LoadMoreButton />
    </StyledGallery>
  );
};

export const FilterMenu: React.FC = () => {
  return <div>FilterMenu</div>;
};

export const FilterDropdown: React.FC = () => {
  return <div>FilterDrop</div>;
};
