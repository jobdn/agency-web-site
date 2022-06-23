import React from "react";
import styled from "styled-components";
import { useAppDispatch, useTypedSelector } from "../../store";
import { fetchProducts } from "../../store/reducers/products/fetchProducts";

const StyledBtn = styled.button`
  width: 170px;
  box-shadow: 0px 3px 9px #39140014;
  border-radius: 6px;
  background: #ffffff;
  color: #391400;
  line-height: 19px;
  padding: 15px;
  outline: none;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 80px;
  transition: 0.3s;
  @media screen and (max-width: 1040px) {
    margin-top: 48px;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

export const LoadMoreButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const { page, offset } = useTypedSelector((state) => state.products);

  const handleLoad = () => {
    dispatch(fetchProducts(page, offset));
  };

  return <StyledBtn onClick={handleLoad}>Load More</StyledBtn>;
};
