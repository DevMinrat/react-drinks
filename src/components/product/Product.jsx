import React from "react";

function Product({ imageUrl, name, descr, countries, volumes }) {
  const [activeCountry, setActiveCountry] = React.useState(0);
  const [activeVolume, setActiveVolume] = React.useState(0);

  return (
    <div className="product-item">
      <img className="product-item__img" src={imageUrl} alt="" />
      <div className="product-item__inner">
        <a className="product-item__link" href="#1">
          <p className="product-item__name">{name}</p>
        </a>
        <p className="product-item__descr">{descr}</p>
        <div className="product-item__data pi-data">
          <div className="pi-data__btns">
            <div className="pi-data__row">
              <p className="pi-data__row-title">Страна производитель:</p>
              <div className="pi-data__row-content">
                {countries.map((el, idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveCountry(idx)}
                      className={`pi-data__btn hollow-btn ${
                        activeCountry === idx ? "active" : ""
                      }`}
                    >
                      {el}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="pi-data__row">
              <p className="pi-data__row-title">Объем, мл:</p>
              <div className="pi-data__row-content">
                {volumes.map((el, idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveVolume(idx)}
                      className={`pi-data__btn hollow-btn ${
                        activeVolume === idx ? "active" : ""
                      }`}
                    >
                      {el}
                    </button>
                  );
                })}
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
