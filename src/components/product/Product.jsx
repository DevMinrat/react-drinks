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
                />
                США
                <input
                  className="pi-data__btn hollow-btn"
                  type="radio"
                  name="country"
                />
                Польша
              </div>
            </div>
            <div className="pi-data__row">
              <p className="pi-data__row-title">Объем, мл:</p>
              <div className="pi-data__row-content">
                <input
                  className="pi-data__btn hollow-btn"
                  type="radio"
                  name="volume"
                />
                250
                <input
                  className="pi-data__btn hollow-btn"
                  type="radio"
                  name="volume"
                />
                500
                <input
                  className="pi-data__btn hollow-btn"
                  type="radio"
                  name="volume"
                />
                1000
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
