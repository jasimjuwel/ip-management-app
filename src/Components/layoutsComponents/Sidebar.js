import React, {useEffect} from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import $ from "jquery";
import "metismenu";
import userImg from "../../assets/images/users/avatar-1.jpg";
import chart from "../../assets/images/chart.svg"
import { Link } from 'react-router-dom';
import { postData } from '../../Scripts/api-service';
import { LOGOUT } from '../../Scripts/api';
import Cookies from 'js-cookie';

export default function Sidebar() {

  const logout = async () => {
    console.log("here");
    await postData(LOGOUT);

  Cookies.remove("IPToken");
  window.location = "/auth/login";
  };

  useEffect(() => {
    $("#side-menu").metisMenu();
  }, [])
  
  return (
    <div className="vertical-menu">
      <SimpleBar className="h-100">
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="dropdown d-inline-block m-auto text-center overflow-hidden">
              <button type="button" className="btn header-item bg-soft-custom-primary text-start" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className="rounded-circle header-profile-user" 
                  src={userImg} alt="Header Avatar" />
                <span className="d-none d-xl-inline-block ms-1 fw-medium text-truncate w-130">
                  Jasim Uddin
                </span>
                <p className="position-relative super-admin font-size-12">
                  Super Admin
                </p>
                <i className="fa fa-circle position-relative user-online"> </i>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                {/* item*/}
                <a className="dropdown-item" href="#."><i className="mdi mdi-face-profile font-size-16 align-middle me-1" /> Profile</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#."><i className="mdi mdi-logout font-size-16 align-middle me-1" /> Logout</a>
              </div>
            </li>

            <li className="menu-title or or--x" data-key="t-menu">
              User Panel
            </li>
            <li className="ivr-panel">
              <a href="#." className="has-arrow" aria-expanded="true">
                <img src={chart} className="me-2" alt="IVR" />
                <span> Menu </span>
              </a>
              <ul className="sub-menu" aria-expanded="true">
                <li>
                  <a href="/ip-list">
                    <span data-key="t-calendar"> IP List </span>
                  </a>
                </li>
                <li>
                  <Link to="/audit-log">
                    <span data-key="t-chat"> Audit Log </span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="">
              <a href="#;" className="dropdown-item cursor-pointer p-2" onClick={() => logout()}>
                  Logout
                </a>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </div>
  )
}
