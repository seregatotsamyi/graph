import React from "react";
import { Link } from "react-router-dom";
import WorkImg from "../../assets/img/slider/2.jpg";

export default function Work() {
  return (
    <section className="work">
      <div className="container">
        <div className="work__title">Наши работы</div>
        <ul className="work__inner">
          <li className="work__item">
            <Link to={"/"} className="work__link">
              <img className="work__img" src={WorkImg} alt="work" width={"299"} height={"299"} />
            </Link>
          </li>
          <li className="work__item">
            <Link to={"/"} className="work__link">
              <img className="work__img" src={WorkImg} alt="work" width={"299"} height={"299"} />
            </Link>
          </li>
          <li className="work__item">
            <Link to={"/"} className="work__link">
              <img className="work__img" src={WorkImg} alt="work" width={"299"} height={"299"} />
            </Link>
          </li>
          <li className="work__item">
            <Link to={"/"} className="work__link">
              <img className="work__img" src={WorkImg} alt="work" width={"299"} height={"299"} />
            </Link>
          </li>
          <li className="work__item">
            <Link to={"/"} className="work__link">
              <img className="work__img" src={WorkImg} alt="work" width={"299"} height={"299"} />
            </Link>
          </li>
          <li className="work__item">
            <Link to={"/"} className="work__link">
              <img className="work__img" src={WorkImg} alt="work" width={"299"} height={"299"} />
            </Link>
          </li>
          <li className="work__item">
            <Link to={"/"} className="work__link">
              <img className="work__img" src={WorkImg} alt="work" width={"299"} height={"299"} />
            </Link>
          </li>
          <li className="work__item">
            <Link to={"/"} className="work__link">
              <img className="work__img" src={WorkImg} alt="work" width={"299"} height={"299"} />
            </Link>
          </li>
          <li className="work__item">
            <Link to={"/"} className="work__link">
              <img className="work__img" src={WorkImg} alt="work" width={"299"} height={"299"} />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
