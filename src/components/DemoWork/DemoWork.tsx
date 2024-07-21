import React from "react";
import { Link } from "react-router-dom";
import { WORKS_PATH } from "../../const";
import Work from "../../assets/img/slider/2.jpg";

export default function DemoWork() {
  return (
    <section className="DemoWork">
      <div className="container">
        <div className="DemoWork__title">Наши работы</div>
        <div className="DemoWork__inner">
          <a className="DemoWork__item" href="#">
            <img className="DemoWork__img" src={Work} alt="work" width={"299"} height={"299"} />
          </a>
          <a className="DemoWork__item" href="#">
            <img className="DemoWork__img" src={Work} alt="work" width={"299"} height={"299"} />
          </a>
          <a className="DemoWork__item" href="#">
            <img className="DemoWork__img" src={Work} alt="work" width={"299"} height={"299"} />
          </a>
        </div>
        <Link to={WORKS_PATH} className="DemoWork__btn">
          <span>Все работы</span>

          <svg className="DemoWork__btn-arrow" viewBox="0 0 129 129" enable-background="new 0 0 129 129">
            <g>
              <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" />
            </g>
          </svg>
        </Link>
      </div>
    </section>
  );
}
