import React from "react";
import TableField from "../components/TableField";
import TableBody from "../components/TableBody";

const data = [
  {
    id: 1,
    woCrmReceivedDate: "8/1/2023 6:01:00 AM",
    customerId: "MTX10770282",
    billingId: 11426776,
    username: "JULLIA KRISJAWATI SOEPARNO",
    province: "JAWA TIMUR",
    city: "Kota Surabaya",
    district: "Rungkut",
    Ward: "WONOREJO",
    postalCode: "602296",
    longtitude: "112.735785",
    latitude: "-7.357355",
    qos: "HiFi30 Mbps",
    data1AcsUsername: 11426776,
    data2CustomerContactNum: "085741947530",
    deviceId: 5259000289,
    installationDate: "8/1/2023  12:00:00 AM",
    salesOrder: "2-528141151423",
    siteName: "PERUMAHAN NIRWANA EKSEKUTIF RW04",
  },
];

const ReportData = () => {
  return (
    <main
      id="main"
      className="main"
    >
      <TableField
        headCols={[
          "#",
          "WO CRM Received (Date & Hour)",
          "Customer ID",
          "BillingID",
          "Username",
          "Province",
          "City",
          "District",
          "Ward",
          "Postal Code",
          "Street",
          "Longtitude",
          "Latitude",
          "QOS",
          "Data 1 (ACS Username)",
          "Data 2 (Customer Contact Number",
          "Device ID",
          "Action",
        ]}
        tBody={<TableBody listData={data} />}
      />
    </main>
  );
};

export default ReportData;
