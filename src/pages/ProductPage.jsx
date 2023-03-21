import React from "react";

const ProductPage = () => {
  return (
    <section className="product">
      <div className="container">
        <div className="breadcrumb-wrapper">
          <nav aria-label="breadcrumb" className="breadcrumb">
            <a href="#">Главная</a>
            <a href="#">Каталог</a>
            <a href="#">Безалкогольные напитки</a>
            <a href="#">Lotte</a>
            <span aria-current="page">Milkis</span>
          </nav>
        </div>
        <div className="product__inner">
          <div className="product-gallery">
            <div className="product-producer">
              <img
                className="product-producer__img"
                src="assets/images/product/producer.png"
                alt=""
              />
            </div>
            <div className="product__img-wrapper">
              <img
                className="product__img"
                src="/images/product/product-img.png"
                alt=""
              />
            </div>
            
          </div>
          <div className="product-header">
            <h1 className="product-header__title">Lotte Milkis</h1>
            <p className="product-header__descr">
              Газированный напиток, Корея, 375 мл
            </p>
          </div>
          <div className="product-data">
            <div className="product-data__item">
              <p className="product-data__item-prop">Страна:</p>
              <p className="product-data__item-value">Южная Корея</p>
            </div>
            <div className="product-data__item">
              <p className="product-data__item-prop">Производитель</p>
              <p className="product-data__item-value">Lotte</p>
            </div>
            <div className="product-data__item">
              <p className="product-data__item-prop">Объем, мл</p>
              <p className="product-data__item-value">250</p>
            </div>
            <div className="product-data__item">
              <p className="product-data__item-prop">Вид упаковки</p>
              <p className="product-data__item-value">Банка с ключом</p>
            </div>
            <div className="product-data__item">
              <p className="product-data__item-prop">Тип</p>
              <p className="product-data__item-value">Напиток газированный</p>
            </div>
            <div className="product-data__item">
              <p className="product-data__item-prop">Количество в упаковке</p>
              <p className="product-data__item-value">12 шт</p>
            </div>
            <div className="product-data__item">
              <p className="product-data__item-prop">Вкусы</p>
              <p className="product-data__item-value">
                оригинальный, апельсин, манго, дыня, клубника, персик, ананас,
                банан, яблоко, виноград, черешня и йогурт
              </p>
            </div>
            <div className="product-data__item">
              <p className="product-data__item-prop">Срок годности</p>
              <p className="product-data__item-value">360 дней</p>
            </div>
            <div className="product-data__item">
              <p className="product-data__item-prop">Температурный режим</p>
              <p className="product-data__item-value">от 0`С до +35`С</p>
            </div>
            <button className="product-order filled-btn" data-modal="order">
              <span>Оставить заявку</span>
              <svg>
                <use href="#arrow"></use>
              </svg>
            </button>
          </div>
        </div>
        <div className="product-info">
          <div className="product-info__btns">
            <div className="product-info__tabs-btn tabs-btn tabs-btn_active">
              Описание
            </div>
            <div className="product-info__tabs-btn tabs-btn">Сертификаты</div>
            <div className="product-info__tabs-btn tabs-btn">Доставка</div>
          </div>
          <div className="product-info__content">
            <div className="product-info__tabs-pane tabs-pane tabs-pane_show">
              <h5>Информация</h5>
              <p>
                Безалкогольный слабогазированный напиток, обогащенный кальцием,
                витаминами А, С и Д. Легкий освежающий Милкис — это сочетание
                мягкого нежного вкуса сливок с разнообразными вкусами фруктов,
                дополняемое небольшой газированностью. Милкис имеет нежный
                молочный цвет, в нем отсутствуют консерванты и красители.
                Богатый кальцием, в удобной банке, Милкис можно рекомендовать
                детям и пожилым людям, ведь он полезен для здоровья. Милкис
                напиток — полезный и вкусный выбор молодежи, в нем н{" "}
              </p>
              <br />
              <h5>Условия хранения</h5>
              <p>
                Не подвергать воздействию прямого солнечного света, в сухом
                месте, после вскрытия в холодильнике в течение 24 часов, при
                температуре от 0`С до +35`С
              </p>
              <br />
              <h5>Состав</h5>
              <p>
                Вода, сахар, сухое молоко, диоксид углерода (Е290),фосфорная
                кислота, лимонная кислота (Е330), витамин А, витамин D3.
              </p>
            </div>
            <div className="product-info__tabs-pane tabs-pane certificates splide">
              <div className="splide__track">
                <div className="certificates-wrapper splide__list">
                  <a
                    className="certificates-item splide__slide"
                    href="assets/images/product/certificate.jpg"
                  >
                    <img src="assets/images/product/certificate.jpg" alt="" />
                  </a>
                  <a
                    className="certificates-item splide__slide"
                    href="assets/images/product/certificate.jpg"
                  >
                    <img src="assets/images/product/certificate.jpg" alt="" />
                  </a>
                  <a
                    className="certificates-item splide__slide"
                    href="assets/images/product/certificate.jpg"
                  >
                    <img src="assets/images/product/certificate.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="product-info__tabs-pane tabs-pane">
              <h5>Собственная служба доставки </h5>
              <p>
                Наша компания содержит постоянно обновляемый парк грузовых
                автомобилей и осуществляет оперативную доставку заказов.
              </p>
              <p>
                <strong>
                  Точные сроки и стоимость доставки уточняйте у менеджера: 8
                  (800) 101-23-03
                </strong>
              </p>
              <br />
              <h5>Самовывоз</h5>
              <p>
                Возможен самовывоз с нашего склада по предварительной
                договоренности с менеджером. На территорию склада допускаются
                только автомобили, без автомобиля ПРОПУСКА НЕ ВЫПИСЫВАЮТСЯ.
              </p>
              <br />
              <p>
                <strong>Пункты самовывоза</strong>
              </p>
              <p>
                Краснодар, х. Октябрьский, <br /> ул. Подсолнечная, 44 «А2
                логистик»
              </p>
              <p>
                <strong>Работаем:</strong>
              </p>
              <p>
                Пн-Пт 8:30 - 17:00, <br /> Сб 9:00 - 13:00
              </p>
            </div>
          </div>
        </div>
        <button className="product-order--mob filled-btn" data-modal="order">
          <span>Оставить заявку</span>
          <svg>
            <use href="#arrow"></use>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ProductPage;
