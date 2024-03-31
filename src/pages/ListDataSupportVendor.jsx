import React from "react";
import Header from "../components/Header";
import TableBodySpVendor from "../components/TableBodySpVendor";

const data = [
  {
    id: 1,
    instalasiStatus: "Done",
    region: "Surabaya, Malang",
    actualInstalationDate: "9-January-2023  12:00 AM",
    remark: "Good job brow",
  },
];

const ListDataSupportVendor = () => {
  return (
    <main
      id="main"
      className="main"
    >
      <Header text="List  input Support Vendor" />
      <TableField
        headCols={[
          "No.",
          "Instalasi Status",
          "Region",
          "Actual Installation Date",
          "Remark",
        ]}
        tBody={<TableBodySpVendor listData={data} />}
      />
    </main>
  );
};

export default ListDataSupportVendor;
