import React from "react";
import styled from "styled-components";

import { useTypedSelector } from "../../store";

import { FilterDropdown } from "../FilterDropdown";
import { FilterMenu } from "../FilterMenu";
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
  const [filter, setFilter] = React.useState("");
  const galleryRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const handleResize = () => {
      if (document.documentElement.clientWidth < 1040) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyledGallery className="products" ref={galleryRef}>
      {isMobile ? (
        <FilterDropdown changeFilter={setFilter} />
      ) : (
        <FilterMenu changeFilter={setFilter} />
      )}
      <ProductsList filter={filter} />
      {isLoading ? "Products is loading..." : null}
      <LoadMoreButton />
    </StyledGallery>
  );
};
