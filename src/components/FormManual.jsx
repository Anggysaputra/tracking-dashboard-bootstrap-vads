import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormManual({
  listProvince = [],
  listCity = [],
  selectProvince,
  setSelectProvince,
  selectCity,
  setSelectCity,
}) {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/form-master/list-data");
  }

  return (
    <>
      <div className="card ">
        <div className="card-body">
          <form className="row mb-3">
            <div className="row mb-3">
              <label
                htmlFor="woCrmReceivedDate"
                className="col-sm-5 col-form-label"
              >
                WO CRM Received (Date & Hour)
              </label>
              <div className="col-md-4 mb-3">
                <input
                  placeholder="date"
                  id="woCrmReceivedDate"
                  name="woCrmReceivedDate"
                  type="datetime-local"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="customerId"
                className="col-sm-5 col-form-label"
              >
                Customer ID
              </label>
              <div className="col-sm-7">
                <input
                  id="customerId"
                  name="customerId"
                  type="text"
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="billingId"
                className="col-sm-5 col-form-label"
              >
                Billing ID
              </label>
              <div className="col-sm-7">
                <input
                  id="billingId"
                  name="billingId"
                  type="number"
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="username"
                className="col-sm-5 col-form-label"
              >
                Username
              </label>
              <div className="col-sm-7">
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-5 col-form-label">Province</label>
              <div className="col-sm-7">
                <select
                  className="form-select"
                  value={selectProvince}
                  onChange={(e) => {
                    setSelectProvince(e.target.value);
                  }}
                >
                  <option value="">Select Province</option>
                  {listProvince.map((prov) => (
                    <option
                      key={prov.id}
                      value={prov.id}
                    >
                      {prov.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-5 col-form-label">City</label>
              <div className="col-sm-7">
                <select
                  className="form-select"
                  value={selectCity}
                  onChange={(e) => {
                    setSelectCity(e.target.value);
                  }}
                >
                  <option value="">Select City</option>
                  {listCity.map((city) => (
                    <option
                      key={city.id}
                      value={city.id}
                    >
                      {city.name}
                    </option>
                  ))}
                </select>
                <span
                  className="text-warning"
                  style={{ paddingLeft: "10px" }}
                >
                  Please select a province first
                </span>
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="district"
                className="col-sm-5 col-form-label"
              >
                District
              </label>
              <div className="col-sm-7">
                <input
                  id="district"
                  name="district"
                  type="text"
                  placeholder="Input here..."
                  className="form-control"
                />
                {/* <div className="invalid-feedback">
                        Please provide a valid district.
                      </div> */}
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="ward"
                className="col-sm-5 col-form-label"
              >
                Ward
              </label>
              <div className="col-sm-7">
                <input
                  id="ward"
                  name="ward"
                  type="text"
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="postalCode"
                className="col-sm-5 col-form-label"
              >
                Postal Code
              </label>
              <div className="col-sm-7">
                <input
                  id="postalCode"
                  name="postalCode"
                  type="number"
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="street"
                className="col-sm-5 col-form-label"
              >
                Street
              </label>
              <div className="col-sm-7">
                <input
                  id="street"
                  name="street"
                  type="text"
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="longtitude"
                className="col-sm-5 col-form-label"
              >
                Longtitude
              </label>
              <div className="col-sm-7">
                <input
                  id="longtitude"
                  name="longtitude"
                  type="text"
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="latitude"
                className="col-sm-5 col-form-label"
              >
                Latitude
              </label>
              <div className="col-sm-7">
                <input
                  id="latitude"
                  name="latitude"
                  type="text"
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="qos"
                className="col-sm-5 col-form-label"
              >
                QOS
              </label>
              <div className="col-sm-7">
                <input
                  id="qos"
                  name="qos"
                  type="text"
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="data1AcsUsername"
                className="col-sm-5 col-form-label"
              >
                Data 1 (ACS Username)
              </label>
              <div className="col-sm-7">
                <input
                  id="data1AcsUsername"
                  name="data1AcsUsername"
                  type="text"
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="data2CustomerContactNum"
                className="col-sm-5 col-form-label"
              >
                Data 2 (Customer Contact Number)
              </label>
              <div className="col-sm-7">
                <input
                  id="data2CustomerContactNum"
                  name="data2CustomerContactNum"
                  type="text"
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="deviceId"
                className="col-sm-5 col-form-label"
              >
                Device ID
              </label>
              <div className="col-sm-7">
                <input
                  id="deviceId"
                  name="deviceId"
                  type="text"
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="installationDate"
                className="col-sm-5 col-form-label"
              >
                Instalation Date
              </label>
              <div className="col-sm-7">
                <input
                  id="installationDate"
                  name="installationDate"
                  type="date"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="salesOrder"
                className="col-sm-5 col-form-label"
              >
                Sales Order
              </label>
              <div className="col-sm-7">
                <input
                  id="salesOrder"
                  name="salesOrder"
                  type="text"
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="siteName"
                className="col-sm-5 col-form-label"
              >
                Site Name
              </label>
              <div className="col-sm-7">
                <input
                  id="siteName"
                  name="siteName"
                  type="text"
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-5 col-form-label">
                Create Credential Status
              </label>
              <div className="col-sm-7">
                <select
                  class="form-select"
                  aria-label="multiple select example"
                >
                  <option selected>select Credential Status</option>
                  <option value="DONE">DONE</option>
                  <option value="CONTINUE">CONTINUE</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="createAaaAndCredentialCompletionDate"
                className="col-sm-5 col-form-label"
              >
                Create AAA & Credential Completion (Date & Hour)
              </label>
              <div className="col-md-4">
                <input
                  id="createAaaAndCredentialCompletionDate"
                  name="createAaaAndCredentialCompletionDate"
                  type="datetime-local"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="dateEmailSentToAmt"
                className="col-sm-5 col-form-label"
              >
                Date Email Sent to AMT
              </label>
              <div className="col-md-7">
                <input
                  id="dateEmailSentToAmt"
                  name="dateEmailSentToAmt"
                  type="date"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="partnerWorkIdOhxx"
                className="col-sm-5 col-form-label"
              >
                PartnerWorkID (OHxx)
              </label>
              <div className="col-sm-7">
                <input
                  id="partnerWorkIdOhxx"
                  name="partnerWorkIdOhxx"
                  type="text"
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="woSentToAmtforVisitDateHour"
                className="col-sm-5 col-form-label"
              >
                WO Sent to AMT for VISIT (Date & Hour)
              </label>
              <div className="col-md-4">
                <input
                  id="woSentToAmtforVisitDateHour"
                  name="woSentToAmtforVisitDateHour"
                  type="datetime-local"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-5 col-form-label">
                INSTALL SCHEDULE STATUS
              </label>
              <div className="col-sm-7">
                <select
                  class="form-select"
                  aria-label="Select Schedule Status"
                >
                  <option selected>select Schedule Status</option>
                  <option value="DONE">DONE</option>
                  <option value="CONTINUE">CONTINUE</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="scheduleInstallationDateHour"
                className="col-sm-5 col-form-label"
              >
                Scheduled Installation Date (Date & Hour)
              </label>
              <div className="col-md-4">
                <input
                  id="scheduleInstallationDateHour"
                  name="scheduleInstallationDateHour"
                  type="datetime-local"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="shedulereReschedule1InstallDateHour"
                className="col-sm-5 col-form-label"
              >
                Scheduled Reschedule 1 Date (Date & Hour)
              </label>
              <div className="col-md-4">
                <input
                  id="shedulereReschedule1InstallDateHour"
                  name="shedulereReschedule1InstallDateHour"
                  type="datetime-local"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="reasonForReschedule1"
                className="col-sm-5 col-form-label"
              >
                Reason for Reschedule 1
              </label>
              <div className="col-sm-7">
                <input
                  id="reasonForReschedule1"
                  name="reasonForReschedule1"
                  type="text"
                  placeholder="Input here..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="shedulereReschedule2InstallDateHour"
                className="col-sm-5 col-form-label"
              >
                Scheduled Reschedule 2 Date (Date & Hour)
              </label>
              <div className="col-md-4">
                <input
                  id="shedulereReschedule2InstallDateHour"
                  name="shedulereReschedule2InstallDateHour"
                  type="datetime-local"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="reasonForReschedule2"
                className="col-sm-5 col-form-label"
              >
                Reason for Reschedule 2
              </label>
              <div className="col-sm-7">
                <input
                  id="reasonForReschedule2"
                  name="reasonForReschedule2"
                  type="text"
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
