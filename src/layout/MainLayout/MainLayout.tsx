import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { initializeApp, isShowMenu } from "../../store/appReducer";
import { useAppDispatch, useAppSelector } from "../../store";
import { Header, Loader } from "../../components";
import Footer from "../../components/Footer/Footer";

export const MainLayout = () => {
  const location = useLocation();
  const isInit = useAppSelector((store) => store.app.init);
  const loading = useAppSelector((store) => store.app.loading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  useEffect(() => {
    dispatch(isShowMenu(false));
    document.getElementById("body")?.classList.remove("_fixed");
  }, [location]);

  if (!isInit) {
    return <Loader />;
  }

  return (
    <>
      {loading ? <Loader /> : ""}

			<Header/>

      <main className="main">
       
        <Outlet />
      </main>

			<Footer/>
    </>
  );
};
