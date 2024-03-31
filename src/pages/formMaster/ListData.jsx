import React from "react";
import TableBody from "../../components/TableBody";
import TableField from "../../components/TableField";
import Header from "../../components/Header";
import SelectOption from "../../components/SelectOption";
import { exportToPDFListDataAgent } from "../../helper/exportDoc/exportDocPdf";
import { exportToExcel } from "../../helper/exportDoc/exportDocXlsx";
import { CSVLink } from "react-csv";

const data = [
  {
    id: 1,
    woCrmReceivedDate: "8-January-2023 6:01 AM",
    customerId: "MTX10770282",
    billingId: 11426776,
    username: "JULLIA KRISJAWATI SOEPARNO",
    province: "JAWA TIMUR",
    city: "Kota Surabaya",
    district: "Rungkut",
    ward: "WONOREJO",
    postalCode: "602296",
    street: "KUREKSARI, JL.FLAMBOYAN, RT001/RW002, NO.19, SIDOARJO",
    longtitude: "112.735785",
    latitude: "-7.357355",
    qos: "HiFi30 Mbps",
    data1AcsUsername: 11426776,
    data2CustomerContactNum: "085741947530",
    deviceId: 5259000289,
    installationDate: "8/1/2023  12:00:00 AM",
    salesOrder: "2-528141151423",
    siteName: "PERUMAHAN NIRWANA EKSEKUTIF RW04",
    creditCredentialStatus: "DONE",
    createAaaAndCredentialCompletionDate: "01/08/2023  09:41:56",
    dateEmailSentToAmt: "01/08/2023",
    partnerWorkIdOhxx: 123456789,
    woSentToAmtforVisitDateHour: "01/08/2023  09:24:00",
    instalScheduleStatus: "DONE",
    scheduleInstallationDateHour: "01/08/2023  00:00:00",
    shedulereReschedule1InstallDateHour: "01/08/2023  00:00:00",
    reasonForReschedule1: "Panding Jobs",
    shedulereReschedule2InstallDateHour: "01/08/2023  00:00:00",
    reasonForReschedule2: "Panding Jobs",
  },
  {
    id: 2,
    woCrmReceivedDate: "8-January-2023 6:01 AM",
    customerId: "MTX10770282",
    billingId: 11426776,
    username: "JULLIA KRISJAWATI SOEPARNO",
    province: "JAWA TIMUR",
    city: "Kota Surabaya",
    district: "Rungkut",
    ward: "WONOREJO",
    postalCode: "602296",
    street: "KUREKSARI, JL.FLAMBOYAN, RT001/RW002, NO.19, SIDOARJO",
    longtitude: "112.735785",
    latitude: "-7.357355",
    qos: "HiFi30 Mbps",
    data1AcsUsername: 11426776,
    data2CustomerContactNum: "085741947530",
    deviceId: 5259000289,
    installationDate: "8/1/2023  12:00:00 AM",
    salesOrder: "2-528141151423",
    siteName: "PERUMAHAN NIRWANA EKSEKUTIF RW04",
    creditCredentialStatus: "DONE",
    createAaaAndCredentialCompletionDate: "01/08/2023  09:41:56",
    dateEmailSentToAmt: "01/08/2023",
    partnerWorkIdOhxx: 123456789,
    woSentToAmtforVisitDateHour: "01/08/2023  09:24:00",
    instalScheduleStatus: "DONE",
    scheduleInstallationDateHour: "01/08/2023  00:00:00",
    shedulereReschedule1InstallDateHour: "01/08/2023  00:00:00",
    reasonForReschedule1: "Panding Jobs",
    shedulereReschedule2InstallDateHour: "01/08/2023  00:00:00",
    reasonForReschedule2: "Panding Jobs",
  },
  {
    id: 3,
    woCrmReceivedDate: "8-January-2023 6:01 AM",
    customerId: "MTX10770282",
    billingId: 11426776,
    username: "JULLIA KRISJAWATI SOEPARNO",
    province: "JAWA TIMUR",
    city: "Kota Surabaya",
    district: "Rungkut",
    ward: "WONOREJO",
    postalCode: "602296",
    street: "KUREKSARI, JL.FLAMBOYAN, RT001/RW002, NO.19, SIDOARJO",
    longtitude: "112.735785",
    latitude: "-7.357355",
    qos: "HiFi30 Mbps",
    data1AcsUsername: 11426776,
    data2CustomerContactNum: "085741947530",
    deviceId: 5259000289,
    installationDate: "8/1/2023  12:00:00 AM",
    salesOrder: "2-528141151423",
    siteName: "PERUMAHAN NIRWANA EKSEKUTIF RW04",
    creditCredentialStatus: "DONE",
    createAaaAndCredentialCompletionDate: "01/08/2023  09:41:56",
    dateEmailSentToAmt: "01/08/2023",
    partnerWorkIdOhxx: 123456789,
    woSentToAmtforVisitDateHour: "01/08/2023  09:24:00",
    instalScheduleStatus: "DONE",
    scheduleInstallationDateHour: "01/08/2023  00:00:00",
    shedulereReschedule1InstallDateHour: "01/08/2023  00:00:00",
    reasonForReschedule1: "Panding Jobs",
    shedulereReschedule2InstallDateHour: "01/08/2023  00:00:00",
    reasonForReschedule2: "Panding Jobs",
  },
  {
    id: 4,
    woCrmReceivedDate: "8-January-2023 6:01 AM",
    customerId: "MTX10770282",
    billingId: 11426776,
    username: "JULLIA KRISJAWATI SOEPARNO",
    province: "JAWA TIMUR",
    city: "Kota Surabaya",
    district: "Rungkut",
    ward: "WONOREJO",
    postalCode: "602296",
    street: "KUREKSARI, JL.FLAMBOYAN, RT001/RW002, NO.19, SIDOARJO",
    longtitude: "112.735785",
    latitude: "-7.357355",
    qos: "HiFi30 Mbps",
    data1AcsUsername: 11426776,
    data2CustomerContactNum: "085741947530",
    deviceId: 5259000289,
    installationDate: "8/1/2023  12:00:00 AM",
    salesOrder: "2-528141151423",
    siteName: "PERUMAHAN NIRWANA EKSEKUTIF RW04",
    creditCredentialStatus: "DONE",
    createAaaAndCredentialCompletionDate: "01/08/2023  09:41:56",
    dateEmailSentToAmt: "01/08/2023",
    partnerWorkIdOhxx: 123456789,
    woSentToAmtforVisitDateHour: "01/08/2023  09:24:00",
    instalScheduleStatus: "DONE",
    scheduleInstallationDateHour: "01/08/2023  00:00:00",
    shedulereReschedule1InstallDateHour: "01/08/2023  00:00:00",
    reasonForReschedule1: "Panding Jobs",
    shedulereReschedule2InstallDateHour: "01/08/2023  00:00:00",
    reasonForReschedule2: "Panding Jobs",
  },
  {
    id: 5,
    woCrmReceivedDate: "8-January-2023 6:01 AM",
    customerId: "MTX10770282",
    billingId: 11426776,
    username: "JULLIA KRISJAWATI SOEPARNO",
    province: "JAWA TIMUR",
    city: "Kota Surabaya",
    district: "Rungkut",
    ward: "WONOREJO",
    postalCode: "602296",
    street: "KUREKSARI, JL.FLAMBOYAN, RT001/RW002, NO.19, SIDOARJO",
    longtitude: "112.735785",
    latitude: "-7.357355",
    qos: "HiFi30 Mbps",
    data1AcsUsername: 11426776,
    data2CustomerContactNum: "085741947530",
    deviceId: 5259000289,
    installationDate: "8/1/2023  12:00:00 AM",
    salesOrder: "2-528141151423",
    siteName: "PERUMAHAN NIRWANA EKSEKUTIF RW04",
    creditCredentialStatus: "DONE",
    createAaaAndCredentialCompletionDate: "01/08/2023  09:41:56",
    dateEmailSentToAmt: "01/08/2023",
    //
    partnerWorkIdOhxx: 123456789,
    woSentToAmtforVisitDateHour: "01/08/2023  09:24:00",
    instalScheduleStatus: "DONE",
    scheduleInstallationDateHour: "01/08/2023  00:00:00",
    shedulereReschedule1InstallDateHour: "01/08/2023  00:00:00",
    reasonForReschedule1: "Panding Jobs",
    shedulereReschedule2InstallDateHour: "01/08/2023  00:00:00",
    reasonForReschedule2: "Panding Jobs",
  },
];

const ListData = () => {
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

    const file_name = `list_agent_${formattedDateTime}`;
    exportToExcel(data, file_name);
  }

  function handleExportPdf() {
    exportToPDFListDataAgent(data);
  }

  return (
    <main
      id="main"
      className="main py-2"
    >
      <Header text="List Input Agent" />

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
              Export Excel
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
      {/* </div> */}

      {/* Table */}
      <div className="box box-body box-primary">
        <div
          className="overflow-x-auto"
          style={{ padding: "10px" }}
        >
          <TableField
            headCols={[
              "No.",
              "WO CRM Received (Date & Hour)",
              "Customer ID",
              "BillingID",
              "Username",
              "Province",
              "City",
              "District",
              "Action",
            ]}
            tBody={<TableBody listData={data} />}
          />
        </div>
      </div>
    </main>
  );
};

export default ListData;
