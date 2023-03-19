import React, { useEffect } from 'react'
import { Outlet, Routes, Route } from "react-router-dom";
import AuthRouter from "../Routers/AuthRouter";
import AuthFooter from '../Components/layoutsComponents/AuthFooter';
import Cookies from 'js-cookie';

export default function AuthLayout() {

    useEffect(() => {
        if (Cookies.get("IPToken")) {
            window.location = "/"
        }
    }, [])

    return (
        <div className="auth-page auth-bg">
            <div className="container-fluid p-0">
                <div className="row g-0 justify-content-center align-items-center auth-login-h">
                    <div className="bg-overlay"></div>

                    <div className="col-xl-4 col-lg-5 col-md-6 p-3 m-auto align-items-center">
                        <div className="card mb-0">
                            <div className="card-body">
                                <div className="p-0 p-sm-1 px-xl-0">
                                    <div className="d-flex flex-column h-100">
                                        <div className="mb-3 mb-md-3 mb-sm-1 text-center">
                                        </div>
                                        <Routes>
                                            {
                                                AuthRouter.map((item) => <Route path={item.path} key={'router-' + item.name}
                                                    element={<item.component />} />)
                                            }
                                        </Routes>
                                        
                                        <AuthFooter/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

