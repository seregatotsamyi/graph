import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CONTACT_PATH, MAIN_PATH } from "../../const";
import demo from "../../assets/img/27.jpg";

export default function Contacts() {
  useEffect(() => {
    if (window && document) {
      const script = document.createElement("script");
      const body = document.getElementsByTagName("body")[0];
      script.src = "https://yastatic.net/share2/share.js";
      body.appendChild(script);
    }
  }, []);

  return (
    <section className="contact">
      <div className="container">
        <div className="contact__inner">
          <ul className="contact__left">
            <li className="contact__left-item">
              <a className="contact__left-link" href="#">
                <img className="contact__left-img" src={demo} alt="demo" width={"280"} height={"120"} />
              </a>
            </li>
            <li className="contact__left-item">
              <a className="contact__left-link" href="#">
                <img className="contact__left-img" src={demo} alt="demo" width={"280"} height={"120"} />
              </a>
            </li>
            <li className="contact__left-item">
              <a className="contact__left-link" href="#">
                <img className="contact__left-img" src={demo} alt="demo" width={"280"} height={"120"} />
              </a>
            </li>
          </ul>
          <div className="contact__content">
            <div className="bredcrumbs">
              <ul className="bredcrumbs__list">
                <li className="bredcrumbs__item">
                  <Link className="bredcrumbs__link" to={MAIN_PATH}>
                    Главная
                  </Link>
                </li>
                <li className="bredcrumbs__item">
                  <Link className="bredcrumbs__link" to={CONTACT_PATH}>
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
            <div className="contact__title">Контакты</div>
            <div className="contact__wrap">
              <span className="contact__wrap-item contacts_item__address">
                <svg className="contact__icon contacts_icon__address">
                  <use xlinkHref="#svg_address"></use>
                </svg>
                г. Петрозаводск, ул . Правды 29, офис 13
              </span>

              <span className="contact__wrap-item contacts_item__time">
                <svg className="contact__icon">
                  <use xlinkHref="#svg_time"></use>
                </svg>
                Пн. - Пт. : 09:00 - 20:00 <br />
                Сб. - Вс. : 13:00 - 18:00
              </span>

              <span className="contact__wrap-item contacts_item__phone">
                <svg className="contact__icon">
                  <use xlinkHref="#svg_phone"></use>
                </svg>
                +7 (8142) 22-02-02
              </span>

              <span className="contact__wrap-item contacts_item__mail">
                <svg className="contact__icon">
                  <use xlinkHref="#svg_mail"></use>
                </svg>
                <a href="mailto:mail@tv-tip.ru">mail@tv-tip.ru</a>
              </span>
            </div>

            <div className="contact__re">
              <div
                className="ya-share2"
                data-curtain
                data-services="vkontakte,telegram,twitter,viber,whatsapp"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div id="hbspt" className="sr-only"></div>
    </section>
  );
}
