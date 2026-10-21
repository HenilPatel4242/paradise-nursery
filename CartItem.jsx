
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart?.items || []);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const cartCount = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="cart-page" id="cart">
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#plants">Plants</a>
        <a href="#cart">🛒 Cart ({cartCount})</a>
      </nav>

      <h1>Your Shopping Cart</h1>

      {items.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <a href="#plants">Continue Shopping</a>
        </div>
      ) : (
        <>
          {items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="plant-image"
              />

              <div>
                <h3>{item.name}</h3>
                <p>Unit price: ${item.price.toFixed(2)}</p>
                <p>
                  Item total: $
                  {(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity - 1,
                      })
                    )
                  }
                  disabled={item.quantity <= 1}
                >
                  −
                </button>

                <span> {item.quantity} </span>

                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity + 1,
                      })
                    )
                  }
                >
                  +
                </button>

                <button
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <h2>Cart Total: ${total.toFixed(2)}</h2>

          <button onClick={() => alert("Coming Soon!")}>
            Checkout
          </button>

          <p>
            <a href="#plants">Continue Shopping</a>
          </p>
        </>
      )}
    </div>
  );
}

export default CartItem;
