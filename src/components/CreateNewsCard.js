import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import BrushIcon from '@mui/icons-material/Brush';

const CreateNewsCard = () =>{
    return (
        <Card sx={{ maxWidth: 345, minWidth: 345, minHeight: 250, alignContent: "space-between", display: "grid" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Kreiraj novosti
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Dodaj sadrzaj klikom na zeleno dugme
          </Typography>
        
        <CardActions>
            
        </CardActions>
        
        </CardContent>
        <Link className="addButton" to="/admin/kreirajNovost"><BrushIcon></BrushIcon></Link>
      </Card>
    )
}
export default CreateNewsCard