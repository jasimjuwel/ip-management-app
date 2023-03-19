import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { Outlet, Route, Routes } from 'react-router-dom';
import Footer from "../Components/layoutsComponents/Footer";
import NavBar from "../Components/layoutsComponents/NavBar";
import Sidebar from "../Components/layoutsComponents/Sidebar";
import PrivateRouter from "../Routers/PrivateRouter";

export default function PrivateLayout() {
  useEffect(() => {
    if (!Cookies.get("IPToken")) {
      window.location = "/auth/login"
    }
  }, [])
  return (
    <>
      <div id="layout-wrapper">
        <NavBar />
        <Sidebar />

        <div className="main-content">
          <div className="page-content">
            <Outlet />
            <Routes>
              {
                PrivateRouter.map((item) => <Route path={item.path} key={'router-' + item.name}
                  element={<item.component />} />)
              }
            </Routes>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
