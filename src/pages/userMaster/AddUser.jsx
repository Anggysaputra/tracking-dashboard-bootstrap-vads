import React from "react";
import Heading from "../../components/Heading";
import FormUser from "../../components/FormUser";

const AddUser = () => {
  return (
    <main
      id="main"
      className="main"
    >
      <Heading text="Form Input Data" />
      <FormUser />
    </main>
  );
};

export default AddUser;
