import React from "react";

export default function TableField({ headCols = [], tBody }) {
  return (
    <>
      <div className="row ">
        <div className="col-lg-12">
          {/* <h5 className="card-title">Table with stripped rows</h5> */}
          {/* <!-- Table with stripped rows --> */}
          <table
            className="table table-striped table-bordered"
            // style={{ width: "100%" }}
          >
            <thead>
              <tr>
                {headCols.map((field, idx) => (
                  <th
                    key={idx}
                    scope="col"
                    className="nowrap"
                  >
                    {field}
                  </th>
                ))}
              </tr>
            </thead>
            {tBody}
          </table>
          {/* <!-- End Table with stripped rows --> */}
        </div>
      </div>
          
    </>
  );
}
