import React from "react";
import { Link } from "react-router-dom";

export default function TableBodySpVendor({ listData = [] }) {
  return (
    <tbody>
      {listData.map((data, idx) => (
        <tr key={idx}>
          <th scope="row">{idx + 1}</th>
          <td>{data.instalasiStatus}</td>
          <td>{data.region}</td>
          <td>{data.categoryDate}</td>
          <td>{data.remark}</td>
          <td>{data.bastUploadStatus}</td>

          <td>
            <div
              className="btn-group btn-group-sm"
              role="group"
            >
              <Link
                to={`/form-master/detail-data-support-vendor/${data.id}`}
                state={{ detailDataSupVendor: data }}
                className="btn btn-warning me-1"
              >
                <i className="ebi bi-eye-fill"></i>
              </Link>
              <Link
                to={`/form-master/update-data-support-vendor/:id`}
                state={{ detailDataSupVendor: data }}
                className="btn btn-primary"
              >
                <i className="ri-edit-fill"></i>
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
