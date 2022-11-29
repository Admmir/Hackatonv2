import React from "react";
import Avatar from "@mui/material/Avatar";
import { useLocation } from "react-router";
import Button from "@mui/material/Button";
import { deleteUcitelj } from "./NavBar";
import { deleteUcenik } from "./NavBar";
import EditIcon from '@mui/icons-material/Edit';

export default function UserCard(props) {
  const location = useLocation()
  const onClickHandler = () => {
    if (props.props.Permisija === "Ucitelj") {
      deleteUcitelj(props.props, props.props.email);
    } else {
      deleteUcenik(props.props.email.trim());
    }
  };
  return (
    <div className="cardUser">
     
        <Avatar className="avatar marginAuto">
          {props.props.Ime_Prezime[0].toUpperCase()}
        </Avatar>
        <p className="marginAuto">{props.props.Ime_Prezime}</p>
        {location.pathname === "/admin/userList" && <p>Opravdani : {props.props.Izostanci_Opravdani}</p>}
        {location.pathname === "/admin/userList" && <p>Neopravdani : {props.props.Izostanci_nepravdani}</p>}
        {location.pathname === "/admin/userList" && <p>Vladanje : {props.props.vladanje}</p>}
        {location.pathname !== "/admin/userList" && <p>Predmet : {props.props.Predmet}</p>}
        <Button onClick={onClickHandler} variant="outlined" color="error">
          DELETE
          <button className="editBtn"><EditIcon sx={{color: "white"}}></EditIcon></button>
        </Button>
       
    </div>
  );
}
