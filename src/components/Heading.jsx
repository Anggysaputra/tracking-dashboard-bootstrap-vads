import React from "react";
import { useNavigate } from "react-router-dom";

export default function Heading({ text }) {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <>
      <div className="pagetitle row d-flex align-items-center box box-primary box-body pb-4">
        <div>
          <i
            className="bi bi-arrow-bar-left"
            onClick={handleGoBack}
          ></i>
          <h1 className="font-bold">{text}</h1>
        </div>
      </div>
    </>
  );
}
