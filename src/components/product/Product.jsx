import React from "react";

function Product() {
  return (
    <div className="product-item">
      <img
        className="product-item__img"
        src="images/catalog-page/cola.png"
        alt=""
      />
      <div className="product-item__inner">
        <a className="product-item__link" href="#1">
          <p className="product-item__name">Cola</p>
        </a>
        <p className="product-item__descr">
          Пюре манго; подсластители: высокофруктозный кукурузный сироп,
          сукралоза; регулятор кислотности: лимонная кислота; консервант:
          эриторбиновая кислота; пищевой краситель: бета-каротин; вода.
        </p>
        <div className="product-item__data pi-data">
          <div className="pi-data__btns">
            <div className="pi-data__row">
              <p className="pi-data__row-title">Страна производитель:</p>
              <div className="pi-data__row-content">
                <input
                  className="pi-data__btn hollow-btn"
                  type="radio"
                  name="country"
                  id="cola-usa"
                  defaultChecked
                />
                <label htmlFor="cola-usa">США</label>
                <input
                  className="pi-data__btn hollow-btn"
                  type="radio"
                  name="country"
                  id="cola-poland"
                />
                <label htmlFor="cola-poland">Польша</label>
              </div>
            </div>
            <div className="pi-data__row">
              <p className="pi-data__row-title">Объем, мл:</p>
              <div className="pi-data__row-content">
                <input
                  className="pi-data__btn hollow-btn"
                  type="radio"
                  name="volume"
                  id="cola-250"
                  defaultChecked
                />
                <label htmlFor="cola-250">250</label>
                <input
                  className="pi-data__btn hollow-btn"
                  type="radio"
                  name="volume"
                  id="cola-500"
                />
                <label htmlFor="cola-500">500</label>
                <input
                  className="pi-data__btn hollow-btn"
                  type="radio"
                  name="volume"
                  id="cola-1000"
                />
                <label htmlFor="cola-1000">1000</label>
              </div>
            </div>
          </div>
          <div className="pi-data__order">
            <p className="pi-data__order-price">230₽</p>
            <button className="product-item__order-btn filled-btn">
              Заказать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
