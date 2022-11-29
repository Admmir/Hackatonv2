import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import NovostiCard from "./NovostiCard.js";
import Grid from "@mui/material/Grid";
import firebase from "../Firebase";
import { useState, useEffect } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import UserCard from "./UserList";
import CreateNewsCard from "./CreateNewsCard.js";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { Button } from "@mui/material";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import Help from "./Help.js";
import CreateNews from "./CreateNews.js";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { useDispatch } from "react-redux";
import { ucenikActions } from "../store/ucenik-slice";
import CreateSchedule from "./CreateSchedule.js";
import CreateSubject from "./CreateSubject.js";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);
//Material Ui stuff

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
//Material Ui stuff

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
export function createDoc(newDataObject, id) {
  const ref = firebase.firestore().collection("Ucenik").doc(id);
  ref.set(newDataObject);
}
export function createDoc2(newDataObject, id) {
  const ref = firebase.firestore().collection("Ucitelj").doc(id);
  ref.set(newDataObject);
}
export function createDoc3(newDataObject) {
  const ref = firebase.firestore().collection("Notebook").doc();
  ref.set(newDataObject);
}
export function createDoc4(newDataObject) {
  const ref = firebase.firestore().collection("Predmeti").doc();
  ref.set(newDataObject);
}
export function deleteUcitelj(docx, id) {
  const ref = firebase.firestore().collection("Ucitelj").doc(id);
  ref.delete().catch((err) => {
    alert(err);
  });
}
export function deleteUcenik(id) {
  const ref = firebase.firestore().collection("Ucenik").doc(id);
  ref.delete().catch((err) => {
    alert(err);
  });
}
export function deleteNovost(id) {
  const ref = firebase.firestore().collection("Notebook").doc(id);
  ref.delete().catch((err) => {
    alert(err);
  });
}
export default function PersistentDrawerLeft() {
  

  const dispatch = useDispatch();
  

  let location = useLocation();

  React.useEffect(() => {}, [location]);

  const ref = firebase.firestore().collection("Notebook");

  const [data, setData] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  

  function getData() {
    ref.onSnapshot((QuerySnapshot) => {
      const items = [];
      QuerySnapshot.forEach((doc) => {
        const newObj = {
          id: doc.id,
          ...doc.data(),
        };
        items.push(newObj);
      });
      setData(items);
      
    });
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ucenik = firebase.firestore().collection("Ucenik");

  const [dataUcenik, setDataUcenik] = useState([]);

  function getDataUcenik() {
    ucenik.onSnapshot((QuerySnapshot) => {
      const items = [];
      QuerySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setDataUcenik(items);
      
    });
  }

  useEffect(() => {
    getDataUcenik();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ucitelj = firebase.firestore().collection("Ucitelj");

  const [dataUcitelj, setDataUcitelj] = useState([]);

  function getDataUcitelj() {
    ucitelj.onSnapshot((QuerySnapshot) => {
      const items = [];
      QuerySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setDataUcitelj(items);
      
    });
  }

  useEffect(() => {
    getDataUcitelj();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const predmet = firebase.firestore().collection("Predmeti");

  const [dataPredmet, setDataPredmet] = useState([]);

  function getDataPredmet() {
    predmet.onSnapshot((QuerySnapshot) => {
      const items = [];
      QuerySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setDataPredmet(items);
      
    });
  }

  useEffect(() => {
    getDataPredmet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logOutHandler = () => {
    dispatch(ucenikActions.isAuthentificated());
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            E-Platform
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className="sidebarItems">
          <Link to={"/admin"} className="center">
            <NewspaperIcon></NewspaperIcon>
            <span className="marginLeft5">Novosti</span>
          </Link>

          <Link to={"/admin/createUser"} className="center">
            <AddCircleOutlineIcon></AddCircleOutlineIcon>{" "}
            <span className="marginLeft5">Kreiraj novog učenika</span>
          </Link>
          <Link to={"/admin/createTeacher"} className="center">
            <AddCircleIcon></AddCircleIcon>{" "}
            <span className="marginLeft5">Kreiraj novog učitelja</span>
          </Link>
          <Link to={"/admin/userList"} className="center">
            <FormatListBulletedIcon></FormatListBulletedIcon>
            <span className="marginLeft5">Lista svih učenika</span>
          </Link>

          <Link to={"/admin/teacherList"} className="center">
            <FormatListNumberedIcon></FormatListNumberedIcon>
            <span className="marginLeft5">Lista svih učitelja</span>
          </Link>
          <Link to={"/admin/noviPredmet"} className="center">
            <AddToPhotosIcon></AddToPhotosIcon>
            <span className="marginLeft5">Dodaj novi predmet</span>
          </Link>
          <Link to={"/admin/napraviRaspored"} className="center">
            <CalendarMonthIcon></CalendarMonthIcon>
            <span className="marginLeft5">Napravi raspored</span>
          </Link>
          <Link to={"/admin/pomoc"} className="center">
            <HelpCenterIcon></HelpCenterIcon>
            <span className="marginLeft5">Pomoć</span>
          </Link>
        </List>
        <Divider />
        <Button onClick={logOutHandler} variant="outlined" className="margin10">
          Odjavi se
        </Button>
        <Button
          variant="contained"
          className="margin10"
          href="mailto: admirmehmedovic58@gmail.com"
        >
          Kontaktiraj podršku
        </Button>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Grid
          className="gridCards"
          container
          spacing={2}
          rowSpacing={1}
          columnSpacing={1}
        >
          {location.pathname === "/admin" &&
            data.map((novosti) => {
              return (
                <NovostiCard
                  className="margin10"
                  item
                  xs={6}
                  key={novosti.title}
                  props={novosti}
                />
              );
            })}
          {location.pathname === "/admin" && (
            <CreateNewsCard className="margin10"></CreateNewsCard>
          )}
          {location.pathname === "/admin/userList" &&
            dataUcenik.map((user) => {
              return <UserCard key={user.email} props={user} />;
            })}
          {location.pathname === "/admin/teacherList" &&
            dataUcitelj.map((user) => {
              return <UserCard key={user.email} props={user} />;
            })}
          {location.pathname === "/admin/pomoc" && <Help></Help>}
          {location.pathname === "/admin/kreirajNovost" && (
            <CreateNews></CreateNews>
          )}
          {location.pathname === "/admin/napraviRaspored" && <CreateSchedule props={dataPredmet}></CreateSchedule> }
          {location.pathname === "/admin/noviPredmet" && <CreateSubject props={dataPredmet}></CreateSubject>}
        </Grid>
      </Main>
    </Box>
  );
}
