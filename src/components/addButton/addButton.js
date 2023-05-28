import { AddButtonStyled } from "./addButton.styled"
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from "../../store/cartSlice";

export const AddButton = ({ product, handleAddToCart, disabled }) => {
    const dispatch = useDispatch();
  
    const addToCart = () => {
      dispatch(addItem(product));
      handleAddToCart(product);
    };
  
    return (
      <AddButtonStyled onClick={addToCart} disabled={disabled}>
        Add
      </AddButtonStyled>
    );
  };
  