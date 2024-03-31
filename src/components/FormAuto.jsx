import React from "react";

export default function FormAuto() {
  return (
    <div className="card ">
      <div className="card-body">
        <form>
          <div className="row mb-3">
            <label
              for="inputNumber"
              className="col-sm-2 col-form-label"
            >
              File Upload
            </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="file"
                id="formFile"
              />
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
