import React from "react";
import { Link } from "react-router-dom";

export default function TableBody({ listData = [] }) {
  return (
    <tbody>
      {listData.map((data, idx) => (
        <tr key={idx}>
          <th
            style={{ whiteSpace: "nowrap" }}
            scope="row"
          >
            {idx + 1}
          </th>
          <td style={{ whiteSpace: "nowrap" }}>{data.woCrmReceivedDate}</td>
          <td style={{ whiteSpace: "nowrap" }}>{data.customerId}</td>
          <td style={{ whiteSpace: "nowrap" }}>{data.billingId}</td>
          <td style={{ whiteSpace: "nowrap" }}>{data.username}</td>
          <td style={{ whiteSpace: "nowrap" }}>{data.province}</td>
          <td style={{ whiteSpace: "nowrap" }}>{data.city}</td>
          <td style={{ whiteSpace: "nowrap" }}>{data.district}</td>

          <td>
            <div
              className="btn-group btn-group-sm"
              role="group"
            >
              <Link
                to={`/form-master/detail-data-agent/${data.id}`}
                state={{ detailDataAgent: data }}
                className="btn btn-warning me-1"
              >
                <i className="ebi bi-eye-fill"></i>
              </Link>

              {/* <a
                href="#"
                className="btn btn-danger"
              >
                <i className="ri-delete-bin-line"></i>
              </a> */}
            </div>
          </td>
        </tr>
      ))}
        
    </tbody>
  );
}
