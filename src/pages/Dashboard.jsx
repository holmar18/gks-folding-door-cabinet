import {useState} from "react";
import {styled, createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// Images
import gksLogo from "../assets/gks-logo.png";
import coverImg from "../assets/cover.webp";
// Components
import FoldingDorCabinet from "./FoldingDorCabinet";
import Doors from "./Doors";

const drawerWidth = 200;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({theme, open}) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(0),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(0),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const [route, setRoute] = useState("");
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const currentRoute = () => {
    if (route === "") {
      return (
        <>
          <img
            src={coverImg}
            alt='cover-img'
            style={{
              width: "950px",
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "4rem",
              borderBottomLeftRadius: "4rem",
              borderBottomRightRadius: "1rem",
            }}
          />
        </>
      );
    } else if (route === "fdc") {
      return <FoldingDorCabinet />;
    } else if (route === "doors") {
      return <Doors />;
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{display: "flex"}}>
        <CssBaseline />
        <AppBar position='absolute' open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && {display: "none"}),
              }}>
              <MenuIcon />
            </IconButton>
            <img
              src={gksLogo}
              alt='gks-logo'
              style={{width: "50px", borderRadius: "50%", marginLeft: "auto"}}
            />
          </Toolbar>
        </AppBar>
        <Drawer variant='permanent' open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component='nav'>
            <ListItemButton onClick={() => setRoute("")}>
              <ListItemText primary='Heim' />
            </ListItemButton>
            <Divider sx={{my: 1}} />
            <ListItemButton onClick={() => setRoute("fdc")}>
              <ListItemText primary='Tækjaskápur' />
            </ListItemButton>
            <ListItemButton onClick={() => setRoute("doors")}>
              <ListItemText primary='Hurðar' />
            </ListItemButton>
            <Divider sx={{my: 1}} />
          </List>
        </Drawer>
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}>
          <Toolbar />
          <Container maxWidth='lg' sx={{mt: 4, mb: 4}}>
            <Grid container spacing={3}>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}>
                  {currentRoute()}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
