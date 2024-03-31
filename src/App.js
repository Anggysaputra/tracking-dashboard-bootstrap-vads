import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Global/Sidebar";
import Navbar from "./Global/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import UploadBulkData from "./pages/formMaster/UploadBulkData";
import InputManual from "./pages/formMaster/InputManual";
import ListData from "./pages/formMaster/ListData";
import AddUser from "./pages/userMaster/AddUser";
import InputManualSupVendor from "./pages/formMaster/InputManualSupVendor";
import ReportData from "./pages/ReportData";
import ListDataSupVendor from "./pages/formMaster/ListDataSupVendor";
import DetailDataSupportVendor from "./pages/formMaster/DetailDataSupportVendor";
import UpdateInputManualSupVendor from "./pages/formMaster/UpdateInputManualSupVendor";
import DetailDataAgent from "./pages/formMaster/DetailDataAgent";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    if (openSidebar) {
      document.body.classList.add("toggle-sidebar");
    } else {
      document.body.classList.remove("toggle-sidebar");
    }
    return () => {
      document.body.classList.remove("toggle-sidebar");
    };
  }, [openSidebar]);

  return (
    <>
      <Navbar
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />
      <Sidebar />

      <Routes>
        <Route
          path="/form-master/upload-bulk-data"
          element={<UploadBulkData />}
        />
        <Route
          path="/form-master/input-manual-agent"
          element={<InputManual />}
        />
        <Route
          path="/form-master/input-manual-support-vendor"
          element={<InputManualSupVendor />}
        />
        {/* Route List Data Agent */}
        <Route
          path="/form-master/list-data"
          element={<ListData />}
        />
        // Route Detail Data Agent
        <Route
          path="/form-master/detail-data-agent/:id"
          element={<DetailDataAgent />}
        />
        {/*Route List Support Vendor */}
        <Route
          path="/form-master/list-data-support-vendor"
          element={<ListDataSupVendor />}
        />
        {/*Route Update List Support Vendor */}
        <Route
          path="/form-master/update-data-support-vendor/:id"
          element={<UpdateInputManualSupVendor />}
        />
        {/*Route Detail Support Vendor */}
        <Route
          path="/form-master/detail-data-support-vendor/:id"
          element={<DetailDataSupportVendor />}
        />
        <Route
          path="/report-data"
          element={<ReportData />}
        />
        <Route
          path="/user-master/add-user"
          element={<AddUser />}
        />
      </Routes>
    </>
  );
}

export default App;
