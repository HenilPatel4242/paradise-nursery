

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items || []);

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/plants">Plants</a>
        <a href="/cart">Cart ({totalItems})</a>
      </nav>

      <h1>Shopping Cart</h1>

      {items.length === 0 ? (
        <div>
          <p>Your shopping cart is empty.</p>
          <a href="/plants">Continue Shopping</a>
        </div>
      ) : (
        <>
          {items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                width="120"
                height="120"
              />

              <h2>{item.name}</h2>
              <p>Unit Price: ${Number(item.price).toFixed(2)}</p>
              <p>
                Item Total: $
                {(Number(item.price) * item.quantity).toFixed(2)}
              </p>

              <button
                disabled={item.quantity <= 1}
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: item.quantity - 1,
                    })
                  )
                }
              >
                -
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

              <button onClick={() => dispatch(removeItem(item.id))}>
                Delete
              </button>
            </div>
          ))}

          <h2>Total Cart Amount: ${totalAmount.toFixed(2)}</h2>

          <button onClick={() => alert("Coming Soon!")}>
            Checkout
          </button>

          <a href="/plants">Continue Shopping</a>
        </>
      )}
    </div>
  );
}

export default CartItem;
