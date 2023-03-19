import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "../Layouts/Auth";
import PrivateLayout from "../Layouts/Private";
import ErrorPage404 from "../Pages/ErrorPages/404";
import { initActiveMenu, initFullScreen, initHoriMenuActive, initLeftMenuCollapse, initMenuItemScroll } from "../Scripts/initialScript";


function App() {
  useEffect(() => {
    initLeftMenuCollapse();
    initActiveMenu();
    initMenuItemScroll();
    initHoriMenuActive();
    initFullScreen();
  }, []);

  return (
    <>
      <Routes>
        <Route path="auth/*" element={<AuthLayout/>}>
        </Route>
        <Route path="/*" element={<PrivateLayout />}>
        </Route>
        <Route path="*" element={ErrorPage404} />
      </Routes>
    </>
  );
}

export default App;
