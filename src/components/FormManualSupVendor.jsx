import React from "react";
import { useNavigate } from "react-router-dom";

export default function FormManualSupVendor({ dataEdit = {} }) {
  console.log("dataedit", dataEdit);
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/form-master/list-data-support-vendor");
  }

  return (
    <>
      <div className="card ">
        <div className="card-body">
          <form className="row mb-3">
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label">
                Instalasi Status
              </label>
              <div className="col-sm-7">
                <select
                  class="form-select"
                  aria-label="multiple select example"
                  defaultValue={dataEdit?.instalasiStatus}
                >
                  <option selected>select instalasi status</option>
                  <option value="Done">Done</option>
                  <option value="Continue">Continue</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="region"
                className="col-sm-5 col-form-label"
              >
                Region
              </label>
              <div className="col-sm-7">
                <input
                  id="region"
                  name="region"
                  type="text"
                  defaultValue={dataEdit?.region}
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="categoryDate"
                className="col-sm-5 col-form-label"
              >
                Category Date
              </label>
              <div className="col-sm-7">
                <input
                  id="categoryDate"
                  name="categoryDate"
                  type="text"
                  defaultValue={dataEdit?.categoryDate}
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="sheduleReschedule1Date"
                className="col-sm-5 col-form-label"
              >
                Scheduled Reschedule 1 Date (Date & Hour)
              </label>
              <div className="col-md-4 mb-3">
                <input
                  placeholder="date"
                  id="scheduleReschedule1Date"
                  name="scheduleReschedule1Date"
                  type="datetime-local"
                  defaultValue={dataEdit?.scheduleReschedule1Date}
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="rescheduleByAmtOrCust"
                className="col-sm-5 col-form-label"
              >
                Rescheduled by (AMT / Cust)
              </label>
              <div className="col-sm-7">
                <input
                  id="rescheduleByAmtOrCust"
                  name="rescheduleByAmtOrCust"
                  type="text"
                  defaultValue={dataEdit?.rescheduleByAmtOrCust}
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="reasonforReschedule1"
                className="col-sm-5 col-form-label"
              >
                Reason for Reschedule 1
              </label>
              <div className="col-sm-7">
                <input
                  id="reasonforReschedule1"
                  name="reasonforReschedule1"
                  type="text"
                  defaultValue={dataEdit?.reasonforReschedule1}
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="sheduleReschedule2Date"
                className="col-sm-5 col-form-label"
              >
                Scheduled Reschedule 2 Date (Date & Hour)
              </label>
              <div className="col-md-4 mb-3">
                <input
                  placeholder="date"
                  id="sheduleReschedule2Date"
                  name="sheduleReschedule2Date"
                  type="datetime-local"
                  defaultValue={dataEdit?.sheduleReschedule2Date}
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="rescheduleByAmtOrCust"
                className="col-sm-5 col-form-label"
              >
                Rescheduled by (AMT / Cust)
              </label>
              <div className="col-sm-7">
                <input
                  id="rescheduleByAmtOrCust"
                  name="rescheduleByAmtOrCust"
                  type="text"
                  defaultValue={dataEdit?.rescheduleByAmtOrCust}
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="reasonForReshedule2"
                className="col-sm-5 col-form-label"
              >
                Reason for Reschedule 2
              </label>
              <div className="col-sm-7">
                <input
                  id="reasonForReshedule2"
                  name="reasonForReshedule2"
                  type="text"
                  defaultValue={dataEdit?.reasonForReshedule2}
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="sheduleReschedule3Date"
                className="col-sm-5 col-form-label"
              >
                Scheduled Reschedule 3 Date (Date & Hour)
              </label>
              <div className="col-md-4 mb-3">
                <input
                  placeholder="date"
                  id="sheduleReschedule3Date"
                  name="sheduleReschedule3Date"
                  defaultValue={dataEdit?.sheduleReschedule3Date}
                  type="datetime-local"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="reasonForReshedule3"
                className="col-sm-5 col-form-label"
              >
                Reason for Reschedule 3
              </label>
              <div className="col-sm-7">
                <input
                  id="reasonForReshedule3"
                  name="reasonForReshedule3"
                  type="text"
                  defaultValue={dataEdit?.reasonForReshedule3}
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="actualInstallationDate"
                className="col-sm-5 col-form-label"
              >
                Actual Installation Date (Date & Hour)
              </label>
              <div className="col-md-4 mb-3">
                <input
                  placeholder="date"
                  id="actualInstallationDate"
                  name="actualInstallationDate"
                  defaultValue={dataEdit?.actualInstallationDate}
                  type="datetime-local"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-5 col-form-label">
                Blast Upload Status
              </label>
              <div className="col-sm-7">
                <select
                  class="form-select"
                  aria-label="multiple select example"
                  defaultValue={dataEdit?.bastUploadStatus}
                >
                  <option selected>select blast upload status</option>
                  <option value="DONE">DONE</option>
                  <option value="Continue">CONTINUE</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="balapFileName"
                className="col-sm-5 col-form-label"
              >
                Balap - File Name
              </label>
              <div className="col-md-4 mb-3">
                <input
                  placeholder="Input here..."
                  id="balapFileName"
                  name="balapFileName"
                  defaultValue={dataEdit?.balapFileName}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="balapFromPath"
                className="col-sm-5 col-form-label"
              >
                Balap - From Path
              </label>
              <div className="col-md-4 mb-3">
                <input
                  placeholder="Input here..."
                  id="balapFromPath"
                  name="balapFromPath"
                  defaultValue={dataEdit?.balapFormPath}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-5 col-form-label">
                Instalasi Report & BALAP STATUS
              </label>
              <div className="col-sm-7">
                <select
                  class="form-select"
                  aria-label="multiple select example"
                  defaultValue={dataEdit?.bastUploadStatus}
                >
                  <option selected>select blast upload status</option>
                  <option value="DONE">DONE</option>
                  <option value="CONTINUE">CONTINUE</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="installationReport&BalapCompleDate"
                className="col-sm-5 col-form-label"
              >
                Installation Report & BALAP Completion (Date & Hour)
              </label>
              <div className="col-md-4 mb-3">
                <input
                  placeholder="date"
                  id="instalationReportAndBalapCompletionDateHour"
                  name="instalationReportAndBalapCompletionDateHour"
                  defaultValue={
                    dataEdit?.instalationReportAndBalapCompletionDateHour
                  }
                  type="datetime-local"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="remarks"
                className="col-sm-5 col-form-label"
              >
                Remarks
              </label>
              <div className="col-sm-7">
                <input
                  id="remarks"
                  name="remarks"
                  type="text"
                  defaultValue={dataEdit?.remarks}
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="category"
                className="col-sm-5 col-form-label"
              >
                Category
              </label>
              <div className="col-sm-7">
                <input
                  id="category"
                  name="category"
                  type="text"
                  defaultValue={dataEdit?.category}
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="evidenceLink"
                className="col-sm-5 col-form-label"
              >
                Evidence Link
              </label>
              <div className="col-sm-7">
                <input
                  id="evidenceLink"
                  name="evidenceLink"
                  type="text"
                  defaultValue={dataEdit?.evidenceLink}
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="rxOdp"
                className="col-sm-5 col-form-label"
              >
                RX ODP
              </label>
              <div className="col-sm-7">
                <input
                  id="rxOdp"
                  name="rxOdp"
                  type="text"
                  defaultValue={dataEdit?.rxOdp}
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="rxOnt"
                className="col-sm-5 col-form-label"
              >
                RX ONT
              </label>
              <div className="col-sm-7">
                <input
                  id="rxOnt"
                  name="rxOnt"
                  type="text"
                  defaultValue={dataEdit?.rxOnt}
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-sm-12 d-flex justify-content-end">
                <button
                  onClick={handleSubmit}
                  className="btn btn-primary"
                >
                  Submit Form
                </button>
              </div>
            </div>
          </form>
          {/* <!-- End General Form Elements --> */}
        </div>
      </div>
          
    </>
  );
}
