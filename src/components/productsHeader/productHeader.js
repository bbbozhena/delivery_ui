import { ProductHeaderStyled } from "./productsHeader.styled";
import { Link } from "react-router-dom";

export const ProductHeader = () => {
    return (
  <ProductHeaderStyled>
    <p>Your best delivery</p>
    <Link to="/basket">
    <img width="40px" height="40px" src="https://cdn-icons-png.flaticon.com/512/3721/3721818.png" alt="Basket"></img>
    </Link>
  </ProductHeaderStyled>
    )
};
