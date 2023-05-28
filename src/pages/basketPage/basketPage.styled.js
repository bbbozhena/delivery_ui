import styled from "styled-components/macro";

export const ProductPageMainStyled = styled.div`
display: flex;
justify-content: space-between;
  input {
    margin: 0px 80px;
    border-radius:10px;
    border: 1px solid black;
  }
  button{
    margin: 0px 80px;
    border: 1px solid black;
    padding: 5px 35px;
    border-radius:10px;
    cursor: pointer;
  }
`;

export const BasketPageStyled = styled.div`
  margin: 50px 80px;
  border: 1px solid black;
  border-radius:10px;
  button{
    border: 1px solid black;
    padding: 5px 15px;
    border-radius:10px;
    cursor: pointer;
  }
`;

export const BasketItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 30px;
`;
