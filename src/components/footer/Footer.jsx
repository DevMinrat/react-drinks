const Footer = () => {
  return (
    <footer className="footer">
      <div className="wave-wrapper">
        <svg className="wave-animated wa-big">
          <use href="#wave"></use>
        </svg>
        <svg className="wave-animated wa-sm">
          <use href="#wave-sm"></use>
        </svg>
      </div>
      <div className="container">
        <div className="footer__inner">
          <div className="footer-info">
            <svg className="footer-info__logo">
              <use href="#logo"></use>
            </svg>
            <div className="footer-info__item">
              <p className="footer-info__item-name">Электронный адрес:</p>
              <a className="footer-info__item-link" href="mailto:123@m.m">
                office@importdrinks.ru
              </a>
            </div>
            <div className="footer-info__item">
              <p className="footer-info__item-name">Горячая линия:</p>
              <a className="footer-info__item-link" href="mailto:123123">
                8 (800) 101-23-03
              </a>
            </div>
            <div className="footer-info__item footer-info__item--address">
              <p className="footer-info__item-name">Адрес:</p>
              <p className="footer-info__item-link">
                50000 г. Краснодар, Московская, 59/1
              </p>
            </div>
            <div className="footer-info__soc">
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
          </div>
          <form className="footer-order">
            <p className="footer-order__title">
              Обсудим детали <br /> вашего заказа?
            </p>
            <div className="order-item dark">
              <p className="order-item__name req">Введите ваше имя</p>
              <input
                className="order-item__input"
                type="text"
                placeholder="Иванов Иван"
                required
              />
            </div>
            <div className="order-item dark">
              <p className="order-item__name">Введите ваш E-mail</p>
              <input
                className="order-item__input"
                type="email"
                placeholder="example@mail.ru"
              />
            </div>
            <div className="order-item dark">
              <p className="order-item__name req">Телефон</p>
              <input
                className="order-item__input"
                type="tel"
                placeholder="+7 (928) 123 45 67"
                required
              />
            </div>
            <div className="order-privacy">
              <input
                className="custom-checkbox"
                type="checkbox"
                id="footer-privacy"
                name="footer-privacy"
                value="red"
              />
              <label htmlFor="footer-privacy">
                Нажимая кнопку «Отправить», я даю свое согласие на обработку
                моих персональных данных.
              </label>
            </div>
            <button
              className="footer-order__btn order-submit filled-btn"
              type="submit"
            >
              Отправить
              <svg>
                <use href="#arrow"></use>
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div className="footer-copy">
        <div className="container">
          <p>© import drinks 2022 Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
