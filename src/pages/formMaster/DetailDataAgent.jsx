import React from "react";
import { useLocation } from "react-router-dom";
import DetailNotFound from "../../components/notFound/detailNotFound";
import DetailFormDataAgent from "../../components/DetailFormDataAgent";
import Heading from "../../components/Heading";

const DetailDataAgent = () => {
  const location = useLocation();

  const detailDataAgent = location.state?.detailDataAgent;
  if (!detailDataAgent)
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
      <Heading text={"Form Detail Data Agent"} />

      <DetailFormDataAgent detail={detailDataAgent} />
    </main>
  );
};

export default DetailDataAgent;
