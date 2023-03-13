const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a className="header__logo" href="#1">
            <svg>
              <use href="#logo" className="logo-use"></use>
            </svg>
          </a>
          <nav className="menu">
            <div className="menu__nav-list">
              <div className="nav-list__item nav-list__item--dropdown">
                <a
                  href="#opportunities"
                  className="nav-list__item-link nav-list__item-link--droplink"
                >
                  Каталог
                </a>
                <svg className="nav-list__item-arrow">
                  <use href="#rect-drop-down"></use>
                </svg>
                <div className="nav-list__droplink-list">
                  <a className="droplink-list__item-link" href="#1">
                    Безалкогольные напитки
                  </a>
                  <a className="droplink-list__item-link" href="#2">
                    Слабоалкогольные напитки
                  </a>
                  <a className="droplink-list__item-link" href="#3">
                    Бакалея
                  </a>
                </div>
              </div>
              <div className="nav-list__item nav-list__item--dropdown">
                <a
                  href="#opportunities"
                  className="nav-list__item-link nav-list__item-link--droplink"
                >
                  Информация
                </a>
                <svg className="nav-list__item-arrow">
                  <use href="#rect-drop-down"></use>
                </svg>
                <div className="nav-list__droplink-list">
                  <a className="droplink-list__item-link" href="#1">
                    Оплата и доставка
                  </a>
                  <a className="droplink-list__item-link" href="#2">
                    Сотрудничество
                  </a>
                  <a className="droplink-list__item-link" href="#3">
                    О нас
                  </a>
                  <a className="droplink-list__item-link" href="#3">
                    Вакансии
                  </a>
                </div>
              </div>
              <div className="nav-list__item">
                <a href="#partners" className="nav-list__item-link">
                  О компании
                </a>
              </div>
              <div className="nav-list__item">
                <a href="#partners" className="nav-list__item-link">
                  Контакты
                </a>
              </div>
            </div>

            <div className="header-links">
              <a className="header-links__lang" href="#1">
                Eng
              </a>
              <button className="shop-btn">
                <svg>
                  <use href="#shop-cart"></use>
                </svg>
              </button>
              <div className="header-links__soc-mob footer-info__soc">
                <a className="footer-info__soc-link soc-link--wsp" href="#1">
                  <svg>
                    <use href="#whatsapp"></use>
                  </svg>
                </a>
                <a className="footer-info__soc-link soc-link--tg" href="#1">
                  <svg>
                    <use href="#tg"></use>
                  </svg>
                </a>
              </div>
              <a className="header-links__tel" href="tel:8000123123">
                8 (800) 101-23-03
              </a>
              <button
                className="header-links__cons-btn filled-btn"
                data-modal="order"
              >
                Консультация
              </button>
            </div>
          </nav>
          <div className="burger-menu">
            <div className="burger"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
