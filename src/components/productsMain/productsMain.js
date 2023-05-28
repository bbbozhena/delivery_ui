import { ProductMainStyled } from "./productsMain.styled";
import { Restaurants } from "./productsMain.styled";
import { ProductCard } from "./productsMain.styled";
import { AddButton } from "../addButton/addButton";
import { RestaurantButton } from "./productsMain.styled";
import axios from "axios";
import { useState, useEffect } from "react";

export const ProductMain = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:6002/api/restaurant")
      .then((response) => {
        setRestaurants(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:6002/api/product")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    if (selectedRestaurant && products.length > 0) {
      const filteredProducts = products.filter(
        (product) => product.restaurantId === selectedRestaurant.id
      );
      setSelectedProducts(filteredProducts);
    }
  }, [selectedRestaurant, products]);

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const isCartEmpty = cartItems.length === 0;

  const handleRestaurantSelect = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <ProductMainStyled>
      <Restaurants>
        {restaurants.map((item) => (
          <RestaurantButton
            key={item.id}
            onClick={() => handleRestaurantSelect(item)}
            disabled={!isCartEmpty && selectedRestaurant !== null && selectedRestaurant.id !== item.id}
          >
            <p>{item.name}</p>
          </RestaurantButton>
        ))}
      </Restaurants>
      {selectedProducts.map((product) => (
        <ProductCard key={product.id}>
          <img
            width="300px"
            height="200px"
            src={"http://localhost:6002/" + product.img}
            alt={product.name}
          />
          <p>{product.name}</p>
          <p>{product.desc}</p>
          <p>{product.price}</p>
          <AddButton
            product={product}
            handleAddToCart={handleAddToCart}
            disabled={!isCartEmpty && selectedRestaurant !== null && selectedRestaurant.id !== product.restaurantId}
          />
        </ProductCard>
      ))}
    </ProductMainStyled>
  );
};
