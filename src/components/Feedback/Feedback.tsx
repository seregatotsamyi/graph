import React from "react";

export default function Feedback() {
  return (
    <section className="feedback">
      <div className="container">
        <div className="feedback__title">Закажите звонок</div>
        <div className="feedback__inner">
          <div className="feedback__item">
            <div className="feedback__input-wrap">
              <label className="feedback__lable" htmlFor="name">
                Имя: <span>*</span>
              </label>
              <input className="feedback__input" type="text" />
            </div>
          </div>
          <div className="feedback__item">
            <div className="feedback__input-wrap">
              <label className="feedback__lable" htmlFor="phone">
                Телефон: <span>*</span>
              </label>
              <input className="feedback__input" type="text" placeholder="+7(___) ___-__-__" />
            </div>
          </div>
          <div className="feedback__item">
            <button className="feedback__btn">Заказать</button>
          </div>
        </div>
        <div className="feedback__text">
          <span>
            Я согласен на обработку предоставленных в данной форме персональных данных в соответствии с
            <a href="#">политикой обработки персональных данных</a>
            <span>
              и даю свое согласие на передачу моих персональных данных по открытым каналам связи. Я осознаю риск такой
              передачи данных.
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
