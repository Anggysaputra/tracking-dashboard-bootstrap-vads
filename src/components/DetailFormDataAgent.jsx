import React from "react";

export default function DetailFormDataAgent({ detail = {} }) {
  console.log("detail agent", detail);
  const colorInstallStatus =
    detail?.instalasiStatus === "Done" ? "bg-success-light" : "bg-dark-light";

  return (
    <>
      <div className="card ">
        <div className="card-body">
          <form className="row mb-3">
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">
                  WO CRM Received (Date & Hour)
                </span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 font-bold">:</span> */}
                <span
                  className={`form-control font-bold ${colorInstallStatus}`}
                >
                  {detail.woCrmReceivedDate || "-"}
                </span>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Customer ID</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.customerId || "-"}
                </span>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Billing ID</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.billingId || "-"}
                </span>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Username </span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.username || "-"}
                </span>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Province</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.province || "-"}
                </span>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">City</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.city || "-"}
                </span>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">District </span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.district || "-"}
                </span>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Ward</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.ward || "-"}
                </span>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Postal Code</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.postalCode || "-"}
                </span>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Street</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.street || "-"}
                </span>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Longtitude</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.longtitude || "-"}
                </span>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Latitude </span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.latitude || "-"}
                </span>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">QOS</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.qos || "-"}
                </span>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Data 1 (ACS Username)</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.data1AcsUsername || "-"}
                </span>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">
                  Data 2 (Customer Contact Number)
                </span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.data2CustomerContactNum || "-"}
                </span>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Device ID</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.deviceId || "-"}
                </span>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Instalation Date</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.installationDate || "-"}
                </span>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Sales Order</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.salesOrder || "-"}
                </span>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Site Name</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.siteName || "-"}
                </span>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Create Credential Status</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.creditCredentialStatus || "-"}
                </span>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">
                  Create AAA & Credential Completion (Date & Hour)
                </span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.createAaaAndCredentialCompletionDate || "-"}
                </span>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Date Email Sent to AMT</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.dateEmailSentToAmt || "-"}
                </span>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">PartnerWorkID (OHxx) </span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.partnerWorkIdOhxx || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">
                  WO Sent to AMT for VISIT (Date & Hour)
                </span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.woSentToAmtforVisitDateHour || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">INSTALL SCHEDULE STATUS</span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.instalScheduleStatus || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">
                  Scheduled Installation Date (Date & Hour)
                </span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.scheduleInstallationDateHour || "-"}
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
                  {detail.shedulereReschedule1InstallDateHour || "-"}
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
                  {detail.reasonForReschedule1 || "-"}
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
                  {detail.shedulereReschedule2InstallDateHour || "-"}
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-sm-5">
                <span className="form-label">Reason for Reschedule 2 </span>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* <span className="me-2 ">:</span> */}
                <span className="form-control  bg-secondary-light">
                  {detail.reasonForReschedule2 || "-"}
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
