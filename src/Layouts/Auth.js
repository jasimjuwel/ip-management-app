import React from 'react'
import { Outlet, Routes, Route } from "react-router-dom";
import AuthRouter from "../Routers/AuthRouter";
import logo from "../assets/images/logo.svg";
import AuthFooter from '../Components/layoutsComponents/AuthFooter';

export default function AuthLayout() {
    return (
        <div class="auth-page auth-bg">
            <div class="container-fluid p-0">
                <div class="row g-0 justify-content-center align-items-center auth-login-h">
                    <div class="bg-overlay"></div>

                    <div class="col-xl-4 col-lg-5 col-md-6 p-3 m-auto align-items-center">
                        <div class="card mb-0">
                            <div class="card-body">
                                <div class="p-0 p-sm-1 px-xl-0">
                                    <div class="d-flex flex-column h-100">
                                        <div class="mb-3 mb-md-3 mb-sm-1 text-center">
                                            <a href="index.html" class="d-block auth-logo">
                                                <img src={logo} alt="logo" height="60" class="image-logo" />
                                            </a>
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

