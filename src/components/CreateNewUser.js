import React, { Fragment } from "react";
import NewUser from "./NewUserForm";

const CreateNewUser = (props) => {
  return (
    <Fragment>
      <NewUser predmeti={props.predmeti}></NewUser>
    </Fragment>
  );
};

export default CreateNewUser;
