import React from "react";
import logo from "../asset/vads.png";

export default function Navbar({ setOpenSidebar, openSidebar }) {
  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between ">
          <a
            href="index.html"
            className="logo d-flex align-items-center"
          >
            <img
              src={logo}
              alt=""
            />
            <span className="d-none d-lg-block">INDONESIA</span>
          </a>
          <i
            className="bi bi-list toggle-sidebar-btn "
            onClick={() => setOpenSidebar(!openSidebar)}
          ></i>
        </div>
        {/* <!-- End Logo --> */}

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a
                className="nav-link nav-icon search-bar-toggle "
                href="#"
              >
                <i className="bi bi-search"></i>
              </a>
            </li>
            {/* <!-- End Search Icon--> */}

            <li className="nav-item dropdown"></li>
            {/* <!-- End Notification Nav --> */}

            <li className="nav-item dropdown"></li>
            {/* <!-- End Messages Nav --> */}

            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  K. Anderson
                </span>
              </a>
              {/* <!-- End Profile Iamge Icon --> */}

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>Kevin Anderson</h6>
                  <span>Web Designer</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>
              {/* <!-- End Profile Dropdown Items --> */}
            </li>
            {/* <!-- End Profile Nav --> */}
          </ul>
        </nav>
        {/* <!-- End Icons Navigation --> */}
      </header>
      {/* <!-- End Header -->    */}
          
    </>
  );
}
