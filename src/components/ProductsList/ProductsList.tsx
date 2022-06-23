import React from "react";
import styled from "styled-components";

import { useTypedSelector } from "../../store";
import { Card } from "../Card";

const StyledProductsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1650px;
  margin: 0 auto;
`;

export const ProductsList: React.FC = () => {
  const { products } = useTypedSelector((state) => state.products);
  const { filter } = useTypedSelector((state) => state.filter);

  const filteredProducts = products.map((product) => {
    return product.category.toLowerCase().includes(filter) ? (
      <Card {...product} key={product.id} />
    ) : null;
  });

  return (
    <>
      <StyledProductsList>{filteredProducts}</StyledProductsList>
    </>
  );
};
