import { ProductHeader } from "../../components/productsHeader/productHeader.js"
import { ProductPageStyled } from "./productPage.styled.js"
import { ProductMain } from "../../components/productsMain/productsMain.js"

export const ProductPage = () => {
    return (
    <ProductPageStyled>
   <ProductHeader/>
   <ProductMain/>
    </ProductPageStyled>
    )
}