import React from "react";
import { storeRubrik } from "./categoriesImgStore";
import { PRODUCT_PATH } from "../../const";

export default function Categories() {
  return (
    <section className="categories">
      <div className="container">
        <ul className="categories__inner">
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.banner} alt="banner" width={"72"} height={"72"} />
              <span>Баннеры</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.blank} alt="banner" width={"72"} height={"72"} />
              <span>Бланки</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.blocknote} alt="banner" width={"72"} height={"72"} />
              <span>Блокноты</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.braslet} alt="banner" width={"72"} height={"72"} />
              <span>Браслеты</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.brelki} alt="banner" width={"72"} height={"72"} />
              <span>Брелки</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.buklety} alt="banner" width={"72"} height={"72"} />
              <span>Буклеты</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.vizitki} alt="banner" width={"72"} height={"72"} />
              <span>Визитки</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.dizajn} alt="banner" width={"72"} height={"72"} />
              <span>Дизайн</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.ezhednevniki} alt="banner" width={"72"} height={"72"} />
              <span>Ежедневники</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.znachki} alt="banner" width={"72"} height={"72"} />
              <span>Значки</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.kalendari} alt="banner" width={"72"} height={"72"} />
              <span>Календари</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.plastikovye} alt="banner" width={"72"} height={"72"} />
              <span>Карты пластиковые</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.knizhki} alt="banner" width={"72"} height={"72"} />
              <span>Книжки</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.konverty} alt="banner" width={"72"} height={"72"} />
              <span>Конверты</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.posuda} alt="banner" width={"72"} height={"72"} />
              <span>Кружки</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.laminaciya} alt="banner" width={"72"} height={"72"} />
              <span>Ламинация</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.listovki} alt="banner" width={"72"} height={"72"} />
              <span>Листовки</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.magnity} alt="banner" width={"72"} height={"72"} />
              <span>Магниты</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.naklejki} alt="banner" width={"72"} height={"72"} />
              <span>Наклейки</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.pakety} alt="banner" width={"72"} height={"72"} />
              <span>Пакеты</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.kanrtonnye} alt="banner" width={"72"} height={"72"} />
              <span>Папки картонные</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.pechati} alt="banner" width={"72"} height={"72"} />
              <span>Печати и штампы</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.plakaty} alt="banner" width={"72"} height={"72"} />
              <span>Плакаты</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img
                className="categories__img"
                src={storeRubrik.rasprostranenie}
                alt="banner"
                width={"72"}
                height={"72"}
              />
              <span>Распространение листовок</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.reklamnye} alt="banner" width={"72"} height={"72"} />
              <span>Рекламные конструкции</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.ruchki} alt="banner" width={"72"} height={"72"} />
              <span>Ручки</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.stendy} alt="banner" width={"72"} height={"72"} />
              <span>Стенды</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.suveniry} alt="banner" width={"72"} height={"72"} />
              <span>Сувениры</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.tablichki} alt="banner" width={"72"} height={"72"} />
              <span>Таблички</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img
                className="categories__img"
                src={storeRubrik.tirazhirovanie}
                alt="banner"
                width={"72"}
                height={"72"}
              />
              <span>Тиражирование (ризография)</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.flagi} alt="banner" width={"72"} height={"72"} />
              <span>Флаги и вымпела</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.flazhki} alt="banner" width={"72"} height={"72"} />
              <span>Флажки</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.fleshki} alt="banner" width={"72"} height={"72"} />
              <span>Флешки</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.foto} alt="banner" width={"72"} height={"72"} />
              <span>Фото</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.fotooboi} alt="banner" width={"72"} height={"72"} />
              <span>Фото-обои</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.futbolki} alt="banner" width={"72"} height={"72"} />
              <span>Футболки</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.holsty} alt="banner" width={"72"} height={"72"} />
              <span>Холсты</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.chertezhi} alt="banner" width={"72"} height={"72"} />
              <span>Чертежи</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.shariki} alt="banner" width={"72"} height={"72"} />
              <span>Шары</span>
            </a>
          </li>
          <li className="categories__item">
            <a className="categories__link" href={`${PRODUCT_PATH}/2`}>
              <img className="categories__img" src={storeRubrik.plakaty} alt="banner" width={"72"} height={"72"} />
              <span>Широкоформатная сублимационная печать на ткани</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
