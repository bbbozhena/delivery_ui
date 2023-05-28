import { BasketPageStyled, BasketItemStyled, ProductPageMainStyled } from "./basketPage.styled";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../store/cartSlice";
import { useState } from "react";
import axios from "axios";

export const BasketPage = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const [customerName, setCustomerName] = useState("");
  
    const handleNameChange = (event) => {
      setCustomerName(event.target.value);
    };
  
    const handleRemoveItem = (itemId) => {
      dispatch(removeFromCart(itemId));
    };
  
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
  
    const handleOrder = () => {
      const orderData = {
        customerName: customerName,
        items: cartItems,
      };
  
      axios
        .post(process.env.API_URL + "/api/product_order", orderData)
        .then((response) => {
          dispatch(clearCart());
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    return (
      <>
        <BasketPageStyled>
          {cartItems.map((item) => (
            <div key={item.id}>
              <BasketItemStyled>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </BasketItemStyled>
            </div>
          ))}
        </BasketPageStyled>
        <ProductPageMainStyled>
          <input placeholder="Your name" onChange={handleNameChange} required></input>
          <p>Total: {totalAmount}</p>
          <button onClick={handleOrder}>Order</button>
        </ProductPageMainStyled>
      </>
    );
  };
  