import React from "react";

export default function DetailFormSupVendor({ detail = {} }) {
  const colorInstallStatus =
    detail?.instalasiStatus === "Done" ? "bg-success-light" : "bg-dark-light";

  return (
    <>
      <div className="card ">
        <div className="card-body">
          <form className="row mb-3">
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Instalasi Status</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 font-bold">:</span> */}
                <span
                  className={`form-control font-bold ${colorInstallStatus}`}
                >
                  {detail.instalasiStatus || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Region</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.region || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Category Date</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.categoryDate || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">
                  Scheduled Reschedule 1 Date (Date & Hour)
                </span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.scheduleRescheduleDate || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Rescheduled by (AMT / Cust)</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.rescheduleByAmtOrCust || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Reason for Reschedule 1</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.reasonforReschedule1 || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">
                  Scheduled Reschedule 2 Date (Date & Hour)
                </span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.sheduleReschedule2Date || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Rescheduled by (AMT / Cust)</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.rescheduleByAmtOrCust || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label"> Reason for Reschedule 2</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.reasonForReshedule2 || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">
                  Scheduled Reschedule 3 Date (Date & Hour)
                </span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.sheduleReschedule3Date || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Reason for Reschedule 3</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.reasonForReshedule3 || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">
                  Actual Installation Date (Date & Hour)
                </span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.actualInstallationDate || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Blast Upload Status</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.bastUploadStatus || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Balap - File Name</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.balapFileName || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Balap - From Path</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.balapFormPath || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">
                  Instalasi Report & BALAP STATUS
                </span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.instalasiReportBalapStatus || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">
                  Installation Report & BALAP Completion (Date & Hour)
                </span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.installationReportAndBalapCompleDate || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Remarks </span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.remarks || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Category </span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.category || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Evidence Link</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.evidenceLink || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">RX ODP</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.rxOdp || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">RX ONT</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.rxOnt || "-"}
                </span>
              </div>
            </div>

            {/* <div className="row mb-3">
              <div className="col-sm-12 d-flex justify-content-end">
                <button
                  onClick={handleBack}
                  className="btn btn-primary"
                >
                  Submit Form
                </button>
              </div>
            </div> */}
          </form>
          {/* <!-- End General Form Elements --> */}
        </div>
      </div>
          
    </>
  );
}
