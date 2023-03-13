import React from "react";

const Cart = () => {
  return (
    <div className="cart-wrapper open">
      <div className="cart">
        <div className="cart__header">
          <h2>Корзина</h2>
          <button className="cart-close">
            <svg>
              <use href="#cross"></use>
            </svg>
          </button>
        </div>
        <div className="cart__inner">
          <div className="cart-empty">
            <p className="cart-empty__text">В корзине пусто &#128553;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
