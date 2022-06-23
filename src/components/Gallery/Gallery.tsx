import React from "react";
import styled from "styled-components";

import { useTypedSelector } from "../../store";

import { FilterDropdown } from "../FilterDropdown";
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
  const [isMobile, setIsMobile] = React.useState(true);
  const { isLoading } = useTypedSelector((state) => state.products);
  const [filter, setFilter] = React.useState("");

  // React.useEffect();

  return (
    <StyledGallery className="products">
      {isMobile ? <FilterDropdown changeFilter={setFilter} /> : <FilterMenu />}
      <ProductsList filter={filter} />
      {isLoading ? "Products is loading..." : null}
      <LoadMoreButton />
    </StyledGallery>
  );
};

export const FilterMenu: React.FC = () => {
  return <div>FilterMenu</div>;
};
