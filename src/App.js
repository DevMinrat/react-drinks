import React from "react";

import SvgSprite from "./components/SvgSprite";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Filter from "./components/filter/Filter";
import Product from "./components/product/Product";
import Sort from "./components/sort/Sort";

// import products from "./assets/products.json";

function App() {
  const [items, setItems] = React.useState([]);

  try {
    fetch("https://63bd3851d6600623889de097.mockapi.io/items")
      .then((response) => {
        return response.json();
      })
      .then((res) => setItems(res));
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="page">
      <SvgSprite />
      <Header />
      <main>
        <section className="catalog-page cp">
          <div
            className="catalog-page__header"
            style={{ backgroundImage: "url(images/catalog-page/cp-bg.jpg)" }}
          >
            <div className="container">
              <h1 className="page-title">Безалкогольные напитки</h1>
              <div className="wave-wrapper">
                <svg className="wave-animated wa-big">
                  <use href="#wave"></use>
                </svg>
                <svg className="wave-animated wa-sm">
                  <use href="#wave-sm"></use>
                </svg>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="catalog-page__content cp-content">
              <Filter />
              <Sort />

              <div className="cp-content__inner">
                {items.map((obj) => {
                  return <Product key={obj.id} {...obj} />;
                })}
              </div>
              <div className="catalog-page__nav">
                <span className="catalog-page__nav-item disable">
                  <svg className="cp-nav__icon-prev">
                    <use href="#arrow"></use>
                  </svg>
                </span>
                <span className="catalog-page__nav-item active">1</span>
                <a className="catalog-page__nav-item" href="#1">
                  2
                </a>
                <a className="catalog-page__nav-item" href="#1">
                  3
                </a>
                <a className="catalog-page__nav-item" href="#1">
                  4
                </a>
                <a className="catalog-page__nav-item" href="#1">
                  <svg className="cp-nav__icon-next">
                    <use href="#arrow"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
