// import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
export default function Cart({ onUpdateItemQuantity }) {
  return (
    <CartContext.Consumer>
      {(ctx) => {
        const totalPrice = ctx.items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
        return (
          <div id="cart">
            {ctx.items.length === 0 && <p>No items in cart!</p>}
            {ctx.items.length > 0 && (
              <ul id="cart-items">
                {ctx.items.map((item) => {
                  const formattedPrice = `$${item.price.toFixed(2)}`;

                  return (
                    <li key={item.id}>
                      <div>
                        <span>{item.name}</span>
                        <span> ({formattedPrice})</span>
                      </div>
                      <div className="cart-item-actions">
                        <button
                          onClick={() => ctx.onUpdateCartItemQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => ctx.onUpdateCartItemQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
            <p id="cart-total-price">
              Cart Total: <strong>{formattedTotalPrice}</strong>
            </p>
          </div>
        );
      }}
    </CartContext.Consumer>
  );
}
