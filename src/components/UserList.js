import React, { useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { useLocation } from "react-router";
import Button from "@mui/material/Button";
import { deleteUcitelj } from "./NavBar";
import { deleteUcenik } from "./NavBar";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { editUcenik } from "./NavBar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UserCard(props) {
  const imeRef = useRef()
  const opravdaniRef = useRef()
  const neopravdaniRef = useRef()
  const vladanjeRef = useRef ()


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const location = useLocation();
  const onClickHandler = () => {
    if (props.props.Permisija === "Ucitelj") {
      deleteUcitelj(props.props, props.props.email);
    } else {
      deleteUcenik(props.props.email.trim());
    }
  };
  const onEditSubmit = (event) => {
    event.preventDefault()
    let newData = 
      {
        Ime_Prezime: imeRef.current.value,
        Izostanci_Opravdani : opravdaniRef.current.value,
        Izostanci_nepravdani : opravdaniRef.current.value,
        Predmeti_Ocjene : props.props.Predmeti_Ocjene,
        email : props.props.email,
        vladanje: vladanjeRef.current.value
      }
    editUcenik(newData)
    setOpen(false)
  }
  return (
    <div className="cardUser">
      <Avatar className="avatar marginAuto">
        {props.props.Ime_Prezime[0].toUpperCase()}
      </Avatar>
      <p className="marginAuto">{props.props.Ime_Prezime}</p>
      {location.pathname === "/admin/userList" && (
        <p>Opravdani : {props.props.Izostanci_Opravdani}</p>
      )}
      {location.pathname === "/admin/userList" && (
        <p>Neopravdani : {props.props.Izostanci_nepravdani}</p>
      )}
      {location.pathname === "/admin/userList" && (
        <p>Vladanje : {props.props.vladanje}</p>
      )}
      {location.pathname !== "/admin/userList" && (
        <p>Predmet : {props.props.Predmet}</p>
      )}
      {location.pathname === "/admin/userList" && (
        <button className="editBtn" onClick={handleOpen}>
          <EditIcon sx={{ color: "white" }}></EditIcon>
        </button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ucenik:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              required
              id="outlined-required"
              label="Ime"
              defaultValue={props.props.Ime_Prezime}
              sx={{ marginTop: "10px", width: "100%" }}
              inputRef={imeRef}
            />
            <TextField
              required
              id="outlined-required"
              label="Opravdani"
              defaultValue={props.props.Izostanci_Opravdani}
              sx={{ marginTop: "10px", width: "100%" }}
              inputRef={opravdaniRef}
            />
            <TextField
              required
              id="outlined-required"
              label="Neopravdani"
              defaultValue={props.props.Izostanci_nepravdani}
              sx={{ marginTop: "10px", width: "100%" }}
              inputRef={neopravdaniRef}
            />
            <TextField
              required
              id="outlined-required"
              label="Vladanje"
              defaultValue={props.props.vladanje}
              sx={{ marginTop: "10px", width: "100%" }}
              inputRef={vladanjeRef}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onEditSubmit}
            >
              Potvrdi izmjene
            </Button>
          </Typography>
        </Box>
      </Modal>
      <Button onClick={onClickHandler} variant="outlined" color="error">
        DELETE
      </Button>
    </div>
  );
}
