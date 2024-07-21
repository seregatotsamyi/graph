import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";

import { setTypeApp, useAppDispatch } from "./store";
import router from "./routes";

function App() {
  const dispatch = useAppDispatch();

  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    if (width < 1025) {
      dispatch(setTypeApp("mob"));
    }
  }, [dispatch, width]);

  window.onresize = () => {
    setWidth(window.innerWidth);
    if (width < 1025) {
      dispatch(setTypeApp("mob"));
    } else {
      dispatch(setTypeApp("desk"));
    }
  };

  return <RouterProvider router={router} />;
}

export default App;
