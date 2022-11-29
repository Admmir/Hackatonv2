import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { deleteNovost } from "./NavBar";

export default function NovostiCard(props) {
  const onDeleteHandler = () => {
    deleteNovost(props.props.id)
  }

  return (
    <Card key={props.props.title} sx={{ maxWidth: 345, alignContent: "space-between", display: "grid"}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">Edit</Button>
        <Button onClick={onDeleteHandler} variant="outlined" color="error" size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
