import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <>
      {/* <!-- ======= Sidebar ======= --> */}\
      <aside
        id="sidebar"
        className="sidebar"
      >
        <ul
          className="sidebar-nav"
          id="sidebar-nav"
        >
          {/* <!-- End Dashboard Nav --> */}

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-menu-button-wide"></i>
              <span>Form Master</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="components-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              {/* <li>
                <Link to='/form-master/upload-bulk-data'>
                  <i className="bi bi-circle"></i>
                  <span>Upload Bulk Data</span>
                </Link>
              </li> */}
              <li>
                <Link to="/form-master/input-manual-agent">
                  <i className="bi bi-circle"></i>
                  <span>Input Manual Agent</span>
                </Link>
              </li>
              <li>
                <Link to="/form-master/input-manual-support-vendor">
                  <i className="bi bi-circle"></i>
                  <span>Input Manual Vendor</span>
                </Link>
              </li>
              <li>
                <Link to="/form-master/list-data">
                  <i className="bi bi-circle"></i>
                  <span>List Data Agent</span>
                </Link>
              </li>
              <li>
                <Link to="/form-master/list-data-support-vendor">
                  <i className="bi bi-circle"></i>
                  <span>List Data Vendor</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* <!-- End Components Nav --> */}

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-journal-text"></i>
              <span>User Master</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="forms-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to={"/user-master/add-user"}>
                  <i className="bi bi-circle"></i>
                  <span>Add User</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* <!-- End Forms Nav --> */}

          {/* <!-- End Tables Nav --> */}

          <li className="nav-item">
            <Link
              className="nav-link "
              to="/report-data"
            >
              <i className="bi bi-grid"></i>
              <span>Report Data</span>
            </Link>
          </li>
        </ul>
      </aside>
      {/* <!-- End Sidebar--> */}
    </>
  );
}
