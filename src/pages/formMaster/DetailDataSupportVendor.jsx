import React from "react";
import { useLocation } from "react-router-dom";
import DetailNotFound from "../../components/notFound/detailNotFound";
import DetailFormSupVendor from "../../components/DetailFormSupVendor";
import Heading from "../../components/Heading";

const DetailDataSupportVendor = () => {
  const location = useLocation();

  const detailDataSupVendor = location.state?.detailDataSupVendor;
  console.log("detailDataSupVendor", detailDataSupVendor);

  if (!detailDataSupVendor)
    return (
      <main
        id="main"
        className="main d-flex justify-content-center"
      >
        <DetailNotFound />
      </main>
    );

  return (
    <main
      id="main"
      className="main"
    >
      <Heading text={"Form Detail Support Vendor"} />
      <DetailFormSupVendor detail={detailDataSupVendor} />
    </main>
  );
};

export default DetailDataSupportVendor;
