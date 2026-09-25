import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";

function Cart({ onClose }) {
  const dispatch = useDispatch();

  const { items, totalQuantity, totalAmount } =
    useSelector((state) => state.cart);

  return (
    <aside className="cart-panel" id="cart">
      <div className="cart-header">
        <div>
          <p className="eyebrow">YOUR BAG</p>
          <h2>Shopping Cart</h2>
        </div>

        <button
          className="close-cart"
          onClick={onClose}
        >
          ×
        </button>
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">
            🛒
          </div>

          <h3>Your cart is empty</h3>

          <p>
            Add some products and they will appear
            here.
          </p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <div
                className="cart-item"
                key={item.id}
              >
                <div
                  className="cart-product-image"
                  style={{
                    background: item.color,
                  }}
                >
                  {item.icon}
                </div>

                <div className="cart-item-info">
                  <h4>{item.name}</h4>

                  <p>₹{item.price}</p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        dispatch(
                          decreaseQuantity(item.id)
                        )
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(
                          increaseQuantity(item.id)
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="remove-button"
                  onClick={() =>
                    dispatch(
                      removeFromCart(item.id)
                    )
                  }
                >
                  🗑
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div>
              <span>Items</span>
              <strong>{totalQuantity}</strong>
            </div>

            <div>
              <span>Delivery</span>
              <strong className="free">
                FREE
              </strong>
            </div>

            <div className="cart-total">
              <span>Total</span>
              <strong>₹{totalAmount}</strong>
            </div>

            <button className="checkout-button">
              Proceed to Checkout →
            </button>

            <button
              className="clear-cart"
              onClick={() =>
                dispatch(clearCart())
              }
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </aside>
  );
}

export default Cart;