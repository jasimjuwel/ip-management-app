import React from 'react';

export default function NavBar() {
    return (
        <header id="page-topbar">
            <div className="navbar-header">
                <div className="d-flex">
                    {/* LOGO */}
                    <div className="navbar-brand-box">
                        <a href="index.html" className="logo logo-dark">
                            <span className="logo-sm">
                                IP Management
                            </span>
                            <span className="logo-lg">
                                IP Management
                            </span>
                        </a>
                        <a href="index.html" className="logo logo-light">
                            <span className="logo-sm">
                                IP Management
                            </span>
                            <span className="logo-lg">
                                IP Management
                            </span>
                        </a>>
                    </div>
                    <button type="button" className="btn btn-sm px-3 font-size-16 header-item" 
                        id="vertical-menu-btn">
                        <i className="fa fa-fw fa-bars" />
                    </button>
                    {/* App Search*/}
                </div>
                <div className="m-auto">
                    <h3 className="mb-0 font-weight-medium"> Dashboard </h3>
                </div>
            </div>
        </header>

    )
}
