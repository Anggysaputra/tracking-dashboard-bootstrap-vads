import React from "react";

export default function FormUser() {
  return (
    <div className="card ">
      <div className="card-body">
        <form>
          <div className="row mb-3">
            <label
              for="name"
              className="col-sm-2 col-form-label"
            >
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label
              for="email"
              className="col-sm-2 col-form-label"
            >
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label
              for="username"
              className="col-sm-2 col-form-label"
            >
              username
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label
              for="inputEmail"
              className="col-sm-2 col-form-label"
            >
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Select Role</label>
            <div class="col-sm-10">
              <select
                class="form-select"
                aria-label="multiple select example"
              >
                <option selected>Open this select role</option>
                <option value="1">Admin</option>
                <option value="2">Agent Service Desk</option>
                <option value="3">Support Vendor</option>
              </select>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-sm-12 d-flex justify-content-end">
              <button
                type="submit"
                class="btn btn-primary"
              >
                Submit Form
              </button>
            </div>
          </div>
        </form>
        {/* <!-- End General Form Elements --> */}
      </div>
    </div>
  );
}
