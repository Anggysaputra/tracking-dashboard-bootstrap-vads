import React from "react";
import company from "../asset/vads.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  async function handleLogin() {
    navigate("/form-master");
  }

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <a
                    href="index.html"
                    className="logo d-flex align-items-center w-auto"
                  >
                    <img
                      src={company}
                      alt="company"
                      className="h-20"
                    />
                    <span className="d-none d-lg-block">NiceAdmin</span>
                  </a>
                </div>
                {/* <!-- End Logo --> */}

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        Login to Your Account
                      </h5>
                      <p className="text-center small">
                        Enter your username & password to login
                      </p>
                    </div>

                    <form
                      className="row g-3 needs-validation"
                      novalidate
                    >
                      <div className="col-12">
                        <label
                          for="yourUsername"
                          className="form-label"
                        >
                          Username
                        </label>
                        <div className="input-group has-validation">
                          {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
                          {/* <label for="yourPassword" className="form-label">username</label> */}
                          <input
                            type="text"
                            name="username"
                            className="form-control"
                            id="yourUsername"
                            required
                            autoFocus
                          />
                          <div className="invalid-feedback">
                            Please enter your username.
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <label
                          for="yourPassword"
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="yourPassword"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>

                      <div className="col-12"></div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100"
                          //   type="submit"
                          onClick={handleLogin}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="credits">
                  Designed by{" "}
                  <a href="https://bootstrapmade.com/">Vads Indonesia</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    //   {/* <!-- End #main --> */}
  );
};

export default Login;
