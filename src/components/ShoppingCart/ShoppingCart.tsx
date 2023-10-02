import React, { useState } from "react";
import "./styles.scss";

const CART_DATA = [
  {
    id: 1,
    name: "Apple iPhone 12 Pro",
    description: "256GB, Gold",
    price: 999.99,
  },
  {
    id: 2,
    name: "Samsung Galaxy S21 Ultra",
    description: "128GB, Phantom Black",
    price: 1199.99,
  },
  {
    id: 3,
    name: "Google Pixel 5",
    description: "128GB, Just Black",
    price: 699.99,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(CART_DATA);

  const handleDeleteItem = (itemId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div className="cart-item">
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>${item.price}</p>
              </div>
              <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <p>Total: ${cartTotal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
