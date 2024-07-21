import { isShowMenu, useAppDispatch, useAppSelector } from "../../store";
import Logo from "../../assets/img/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AlignRightOutlined, CloseOutlined } from "@ant-design/icons";
import { CONTACT_PATH, MAIN_PATH, WORKS_PATH } from "../../const";

export const Header = () => {
  const isShowMenuHtml = useAppSelector((state) => state.app.isShowMenu);
  const dispatch = useAppDispatch();

  const onShowMenu = () => {
    dispatch(isShowMenu(true));
    document.getElementById("body")?.classList.add("_fixed");
  };
  const onCloseMenu = () => {
    dispatch(isShowMenu(false));
    document.getElementById("body")?.classList.remove("_fixed");
  };
  return (
    <div className="header">
      <div className="container">
        <div className="header__top">
          <Link className="header__logo" to={MAIN_PATH}>
            <img className="header__logo-img" src={Logo} alt="logo" />
          </Link>
          <button className="header__burger" type="button" onClick={onShowMenu}>
            <AlignRightOutlined />
          </button>
          <div className="header__right">
            <span className="header__right-contacts header__right-contacts_phone">22-02-02</span>
            <a href="mailto:mail@tv-tip.ru" className="header__right-contacts header__right-contacts_mail">
              mail@tv-tip.ru
            </a>
          </div>
        </div>
        <div className={`header__nav menu ${isShowMenuHtml && "_open"}`}>
          <button className="menu__burger" type="button" onClick={onCloseMenu}>
            <CloseOutlined />
          </button>
          <div className="menu__info">
            <span className="header__right-contacts header__right-contacts_phone">22-02-02</span>
            <a href="mailto:mail@tv-tip.ru" className="header__right-contacts header__right-contacts_mail">
              mail@tv-tip.ru
            </a>
          </div>
          <nav className="menu__nav">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="/about/" title="О нас" className="menu__link">
                  О нас
                </a>
              </li>

              <li className="menu__item">
                <NavLink to={WORKS_PATH} title="Наши работы" className="menu__link">
                  Наши работы
                </NavLink>
              </li>

              <li className="menu__item">
                <NavLink to={CONTACT_PATH} title="Контакты" className="menu__link">
                  Контакты
                </NavLink>
              </li>

              <li className="menu__item">
                <a href="/skachat/" title="Скачать" className="menu__link">
                  Скачать
                </a>
              </li>

              <li className="menu__item">
                <a href="/callback/" title="Закажите звонок" className="menu__link">
                  Заказать звонок
                </a>
              </li>

              <li className="menu__item">
                <a href="/dostavka/" title="Доставка" className="menu__link">
                  Доставка
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
