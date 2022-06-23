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

interface ProductsListProps {
  filter: string;
}

export const ProductsList: React.FC<ProductsListProps> = ({ filter }) => {
  const { products } = useTypedSelector((state) => state.products);
  const filteredProducts = products.map((product) => {
    return product.category.includes(filter) ? (
      <Card {...product} key={product.id} />
    ) : null;
  });

  return (
    <>
      <StyledProductsList>{filteredProducts}</StyledProductsList>
    </>
  );
};
