import React from "react";

export default function Header({ text }) {
  return (
    <>
      <div className="mt-10 ">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">
          <h2 className="font-bold">{text}</h2>
        </div>
      </div>
         
    </>
  );
}
