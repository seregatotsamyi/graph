import React from "react";

export default function Search() {
  return (
    <section className="search">
      <div className="container">
        <div className="search__inner">
          <div className="search__left">
            <label className="search__label" htmlFor="2">
              Поиск:
            </label>
            <input className="search__input" type="text" id="2" placeholder="Поискаовый запрос" />
          </div>
          <button className="search__btn" type="button">
            Искать
          </button>
        </div>
      </div>
    </section>
  );
}
