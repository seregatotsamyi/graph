import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CONTACT_PATH, WORKS_PATH } from "../../const";

export default function Footer() {
  return (
    <footer className="footer print-hide">
      <div className="footer__top">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__inner-top">
              <div className="socialLinks socialLinks__footer footer__inner-social">
                <Link to="https://vk.com/tt_print" target="_blank" className="socialLinks__link">
                  <svg className="socialLinks__icon socialLinks__icon_vk">
                    <use xlinkHref="#svg_vk"></use>
                  </svg>
                </Link>
              </div>

              <ul className="footer__list">
                <li className="footer__list-item">
                  <a href="/about/" className="footer__list-link" title="О нас">
                    О нас
                  </a>
                </li>

                <li className="footer__list-item">
                  <NavLink to={WORKS_PATH} className="footer__list-link" title="Наши работы">
                    Наши работы
                  </NavLink>
                </li>

                <li className="footer__list-item">
                  <NavLink to={CONTACT_PATH} className="footer__list-link" title="Контакты">
                    Контакты
                  </NavLink>
                </li>

                <li className="footer__list-item">
                  <a href="/skachat/" className="footer__list-link" title="Скачать">
                    Скачать
                  </a>
                </li>

                <li className="footer__list-item">
                  <a href="/callback/" className="footer__list-link" title="Закажите звонок">
                    Заказать звонок
                  </a>
                </li>

                <li className="footer__list-item">
                  <a href="/dostavka/" className="footer__list-link" title="Доставка">
                    Доставка
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__inner-bottom">
              <span className="footer__contact-item">
                <svg className="footer__contact-icon">
                  <use xlinkHref="#svg_phone"></use>
                </svg>
                +7 (8142) 22-02-02
              </span>

              <span className="footer__contact-item ">
                <svg className="footer__contact-icon">
                  <use xlinkHref="#svg_mail"></use>
                </svg>
                <a href="mailto:mail@tv-tip.ru">mail@tv-tip.ru</a>
              </span>

              <span className="footer__contact-item">
                <svg className="footer__contact-icon">
                  <use xlinkHref="#svg_time"></use>
                </svg>
                Пн. - Пт. : 09:00 - 20:00 <br />
                Сб. - Вс. : 13:00 - 18:00
              </span>

              <span className="footer__contact-item">
                <svg className="footer__contact-icon">
                  <use xlinkHref="#svg_address"></use>
                </svg>
                г. Петрозаводск, ул . Правды 29, офис 13
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__copyright">2018 © Твоя Типография</div>
        </div>
      </div>
    </footer>
  );
}
