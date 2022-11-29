import React, { useRef } from "react";
import { TextField } from "@mui/material";
import { createDoc4 } from "./NavBar";

const CreateSubject = (props) => {
  const subjectInput = useRef();

  const addHandler = (event) => {
    event.preventDefault();
    createDoc4({
      name: subjectInput.current.value,
    });
    subjectInput.current.value = "";
  };
  return (
    <div className="marginAuto">
      <h1>Dodaj Predmet</h1>
      <form>
        <TextField inputRef={subjectInput}></TextField>
        <button onClick={addHandler} className="createBtn">
          +
        </button>
      </form>
      <div className="subjectList">
        <h3>Lista svih predmeta (A-Z) :</h3>
        <ul>
          {props.props
            .sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            })
            .map((predmet) => {
              return <li key={predmet.name}>{predmet.name}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default CreateSubject;
