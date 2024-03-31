import React from "react";
import SelectOption from "../../components/SelectOption";
import TableField from "../../components/TableField";
import Header from "../../components/Header";
import { CSVLink } from "react-csv";
import TableBodySpVendor from "../../components/TableBodySpVendor";
import { exportToPDFListDataVendor } from "../../helper/exportDoc/exportDocPdf";
import { exportToExcel } from "../../helper/exportDoc/exportDocXlsx";

const data = [
  {
    id: 1,
    instalasiStatus: "Done",
    region: "Surabaya Malang",
    categoryDate: "20-October-2024",
    scheduleReschedule1Date: "2024-04-02T10:30",
    reasonforReschedule1: "2024-05-05T10:30",
    sheduleReschedule2Date: "2024-05-05T10:30",
    rescheduleByAmtOrCust: "2024-05-05T10:30",
    reasonForReshedule2: "2024-04-07T10:30",
    sheduleReschedule3Date: "2024-04-07T10:30",
    reasonForReshedule3: "2024-04-07T10:30",
    actualInstallationDate: "2024-04-07T10:30",
    bastUploadStatus: "DONE",
    balapFileName: "BALAP - 45139,23069444444",
    balapFormPath:
      "https://drive.google.com/drive/folders/18Lo77CNXvIJTxTmfbX6GnxN5FgV4FgF5?usp=sharing",
    instalasiReportBalapStatus: "DONE",
    instalationReportAndBalapCompletionDateHour: "2024-04-07T10:30",
    remarks: "Oke mantaps",
    category: "Balap liar",
    evidenceLink: null,
    rxOdp: null,
    rxOnt: null,
  },
];

const ListDataSupVendor = () => {
  function handleExportExcel() {
    const currentDate = new Date();

    const formattedDateTime = currentDate
      .toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false, // Set waktu dalam format 24 jam
      })
      .replace(/[,\/]/g, "")
      .replace(/\s+/g, "");

    const file_name = `list_support_vendor_${formattedDateTime}`;
    exportToExcel(data, file_name);
  }

  function handleExportPdf() {
    exportToPDFListDataVendor(data);
  }

  return (
    <main
      id="main"
      className="main py-2"
    >
      <Header text="List  Input Support Vendor" />

      {/* filter */}
      <div className="row g-2 mb-5 d-flex box box-primary box-body pb-4 ">
        <div className="col-md-2 ">
          <input
            type="email"
            className="form-control"
            id="floatingInputGrid"
            placeholder="search customerId..."
          />
        </div>
        <div className="col-md-2">
          <input
            type="email"
            className="form-control"
            id="floatingInputGrid"
            placeholder="search username..."
          />
        </div>
        <div className="col-md-1">
          <button
            className="btn btn-primary"
            type="submit"
          >
            Search
          </button>
        </div>
        <div className="col-md-7 d-flex justify-content-end">
          <div
            className="btn-group"
            role="group"
          >
            <CSVLink
              data={data}
              className="btn btn-secondary me-1"
            >
              Export CSV
            </CSVLink>
            <button
              className="btn btn-secondary me-1"
              onClick={handleExportExcel}
            >
              Export XLSX
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleExportPdf}
            >
              Export PDF
            </button>
          </div>
        </div>
      </div>

      <TableField
        headCols={[
          "No.",
          "Instalasi Status",
          "Region",
          "Category Date",
          "Actual Instalation Date",
          "Bast Upload Status",
          "Action",
        ]}
        tBody={<TableBodySpVendor listData={data} />}
      />
    </main>
  );
};

export default ListDataSupVendor;
