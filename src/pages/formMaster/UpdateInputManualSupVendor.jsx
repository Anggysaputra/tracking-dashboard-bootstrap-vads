import React from "react";
import { useLocation, useParams } from "react-router-dom";
import DetailNotFound from "../../components/notFound/detailNotFound";
import FormManualSupVendor from "../../components/FormManualSupVendor";
import Heading from "../../components/Heading";

const UpdateInputManualSupVendor = () => {
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
      <Heading text={"Form Update Support Vendor"} />
      <FormManualSupVendor dataEdit={detailDataSupVendor} />
    </main>
  );
};

export default UpdateInputManualSupVendor;
