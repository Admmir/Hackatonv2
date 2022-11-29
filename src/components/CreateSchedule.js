import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";

function SelectAutoWidth() {
  const [classGrade, setClassGrade] = useState("");

  const handleChange = (event) => {
    setClassGrade(event.target.value);
  };

  return (
    <div>
      <InputLabel id="demo-simple-select-autowidth-label">Izaberi razred :</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={classGrade}
        onChange={handleChange}
        label="Razred"
        sx={{width : "100%", margin : "20px 0 20px 0"}}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
    </div>
  );
}

function SelectSmall(props) {
  const [subject, setSubject] = useState("");

  const handleChange = (event) => {
    setSubject(event.target.value);
    props.rasporedFunction(event.target.value, props.day, props.position);
  };

  return (
    <Select
      labelId="demo-select-small"
      id="demo-select-small"
      value={subject}
      label="Age"
      onChange={handleChange}
      sx={{ borderRadius: "0", outline: "none", overflow: "hidden" }}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {props.props.map((subject) => {
        return <MenuItem key={subject.name} value={subject.name}>{subject.name}</MenuItem>;
      })}
    </Select>
  );
}
const CreateSchedule = (props) => {
  const [raspored, setRaspored] = useState({
    Ponedjeljak: [" ", " ", " ", " ", " "],
    Utorak: [" ", " ", " ", " ", " "],
    Srijeda: [" ", " ", " ", " ", " "],
    Cetvrtak: [" ", " ", " ", " ", " "],
    Petak: [" ", " ", " ", " ", " "],
  });

  const rasporedChangeHandler = (data, day, position) => {
    if (day === 0) {
      setRaspored((prevState) => {
        return {
          ...prevState,
          Ponedjeljak: [
            ...prevState.Ponedjeljak.slice(0, position),
            data,
            ...prevState.Ponedjeljak.slice(position + 1, 5),
          ],
        };
      });
    } else if (day === 1) {
      setRaspored((prevState) => {
        return {
          ...prevState,
          Utorak: [
            ...prevState.Utorak.slice(0, position),
            data,
            ...prevState.Utorak.slice(position + 1, 5),
          ],
        };
      });
    } else if (day === 2) {
      setRaspored((prevState) => {
        return {
          ...prevState,
          Srijeda: [
            ...prevState.Srijeda.slice(0, position),
            data,
            ...prevState.Srijeda.slice(position + 1, 5),
          ],
        };
      });
    } else if (day === 3) {
      setRaspored((prevState) => {
        return {
          ...prevState,
          Cetvrtak: [
            ...prevState.Cetvrtak.slice(0, position),
            data,
            ...prevState.Cetvrtak.slice(position + 1, 5),
          ],
        };
      });
    } else if (day === 4) {
      setRaspored((prevState) => {
        return {
          ...prevState,
          Petak: [
            ...prevState.Petak.slice(0, position),
            data,
            ...prevState.Petak.slice(position + 1, 5),
          ],
        };
      });
    }
  };
  return (
    <div className="centerDiv">
      <h1>Napravi raspored</h1>
      <SelectAutoWidth></SelectAutoWidth>
      <div className="rasporedGrid">
        <div>Dan</div>
        <div className="selectSubject">
          <div>1.</div>
          <div>2.</div>
          <div>3.</div>
          <div>4.</div>
          <div>5.</div>
        </div>
        <div>Pon</div>
        <div className="selectSubject">
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={0}
            position={0}
            props={props.props}
          />
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={0}
            position={1}
            props={props.props}
          />
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={0}
            position={2}
            props={props.props}
          />
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={0}
            position={3}
            props={props.props}
          />
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={0}
            position={4}
            props={props.props}
          />
        </div>
        <div>Uto</div>
        <div className="selectSubject">
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={1}
            props={props.props}
            position={0}
          />
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={1}
            props={props.props}
            position={1}
          />
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={1}
            props={props.props}
            position={2}
          />
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={1}
            props={props.props}
            position={3}
          />
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={1}
            props={props.props}
            position={4}
          />
        </div>
        <div>Sri</div>
        <div className="selectSubject">
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={2}
            props={props.props}
            position={0}
          />
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={2}
            props={props.props}
            position={1}
          />
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={2}
            props={props.props}
            position={2}
          />
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={2}
            props={props.props}
            position={3}
          />
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={2}
            props={props.props}
            position={4}
          />
        </div>
        <div>Cet</div>
        <div className="selectSubject">
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={3}
            props={props.props}
            position={0}
          />
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={3}
            props={props.props}
            position={1}
          />
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={3}
            props={props.props}
            position={2}
          />
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={3}
            props={props.props}
            position={3}
          />
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={3}
            props={props.props}
            position={4}
          />
        </div>
        <div>Pet</div>
        <div className="selectSubject">
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={4}
            props={props.props}
            position={0}
          />
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={4}
            props={props.props}
            position={1}
          />
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={4}
            props={props.props}
            position={2}
          />
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={4}
            props={props.props}
            position={3}
          />
          <SelectSmall
            rasporedFunction={rasporedChangeHandler}
            day={4}
            props={props.props}
            position={4}
          />
        </div>
      </div>
      <Button variant="outlined" sx={{ width: "100%", marginTop : "20px" }}>
        Spremi
      </Button>
      <h3>Coming soon!</h3>
    </div>
  );
};

export default CreateSchedule;
