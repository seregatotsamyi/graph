import { useEffect, useState } from "react";
import Promo from "../../components/Promo/Promo";
import Search from "../../components/Search/Search";
import Categories from "../../components/Categories/Categories";
import DemoWork from "../../components/DemoWork/DemoWork";
import Feedback from "../../components/Feedback/Feedback";

export const HomeScreen = () => {
  return (
    <>
      <Promo />
      <div className="bg">
        <Search />
        <Categories />
      </div>
			<DemoWork/> 
			<Feedback/>
    </>
  );
};
