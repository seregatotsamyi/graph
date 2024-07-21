import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { MAIN_PATH, PRODUCT_PATH } from "../../const";

export default function ProductScreen() {
  useEffect(() => {
    if (window && document) {
      const script = document.createElement("script");
      const body = document.getElementsByTagName("body")[0];
      script.src = "https://yastatic.net/share2/share.js";
      body.appendChild(script);
    }
  }, []);
  return (
    <section className="product">
      <div className="container">
        <div className="product__inner">
          <ul className="product__left">
            <li className="product__left-item">
              <NavLink to={"/312"} className="product__left-link">
                Баннеры
              </NavLink>
            </li>
            <li className="product__left-item">
              <NavLink to={"/312"} className="product__left-link">
                Баннеры
              </NavLink>
            </li>
            <li className="product__left-item">
              <NavLink to={"/312"} className="product__left-link">
                Баннеры
              </NavLink>
            </li>
            <li className="product__left-item">
              <NavLink to={"/312"} className="product__left-link">
                Баннеры
              </NavLink>
            </li>
            <li className="product__left-item">
              <NavLink to={"/312"} className="product__left-link">
                Баннеры
              </NavLink>
            </li>
            <li className="product__left-item">
              <NavLink to={"/312"} className="product__left-link">
                Баннеры
              </NavLink>
            </li>
            <li className="product__left-item">
              <NavLink to={"/312"} className="product__left-link">
                Баннеры
              </NavLink>
            </li>
            <li className="product__left-item">
              <NavLink to={"/312"} className="product__left-link">
                Баннеры
              </NavLink>
            </li>
          </ul>
          <div className="product__content">
            <div className="contact__re">
              <div className="ya-share2" data-curtain data-services="vkontakte,telegram,twitter,viber,whatsapp"></div>
            </div>
            <div className="bredcrumbs">
              <ul className="bredcrumbs__list">
                <li className="bredcrumbs__item">
                  <Link className="bredcrumbs__link" to={MAIN_PATH}>
                    Главная
                  </Link>
                </li>
                <li className="bredcrumbs__item">
                  <Link className="bredcrumbs__link" to={PRODUCT_PATH}>
                    Буклеты
                  </Link>
                </li>
              </ul>
            </div>
            <div className="product__title">Буклеты</div>
            <div className="product__inner-text">
              <p>
                Вид полиграфической продукции, который содержит в себе и информацию о продуктах компании, и необходимые
                сведения о самой компании. Таким образом, буклет – это сочетание компактности и максимальной
                информативности. Буклет представляет собой отпечатанный листок, который компактно сложен пополам,
                вчетверо, втрое или иным способом.
              </p>
              <p>
                Самый распространённый вид буклетов – «Евробуклет» размер, которого совпадает с размерами евроконвертов
                (100 х 210 мм)
              </p>
              <p>Буклет поможет вам:</p>
              <ul>
                <li>Рассказать о вашей компании</li>
                <li>Рассказать о вашей компании</li>
              </ul>
              <div className="table-wrap">
                <table>
                  <caption>Перечень продуктов</caption>
                  <tbody>
                    <tr>
                      <th>№ п/п</th>
                      <th>Наименование товара</th>
                      <th>Ед. изм.</th>
                      <th>Количество</th>
                      <th>Цена за ед. изм., руб.</th>
                      <th>Стоимость, руб.</th>
                    </tr>
                    <tr>
                      <td>1.</td>
                      <td>Томаты свежие</td>
                      <td>кг</td>
                      <td>15,20</td>
                      <td>69,00</td>
                      <td>1048,80</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
