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
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import {ClickAwayListener} from "@mui/base/ClickAwayListener";
// Images
import gksLogo from "../assets/gks-logo.png";
// Router
import Routing from "../router/Routing";
// contexts
import { useTranslationContext } from "../context/TranslationContext";

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

const defaultTheme = createTheme();

export default function Dashboard() {

  const {translations, setCurrentTranslation, currentTranslation} =
      useTranslationContext();

  const [open, setOpen] = useState(true);
  const [route, setRoute] = useState("");
  const toggleDrawer = () => {
    setOpen(!open);
  };

  function HideOnScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      window,
    });

    const m = (trigger) => {
      console.log("TRIGGERED");
      return !trigger;
    };

    return (
      <Slide appear={false} direction='down' in={m(trigger)}>
        {children}
      </Slide>
    );
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{display: "flex"}}>
        <CssBaseline />

        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <AppBar position='absolute' open={open}>
            <Toolbar
              sx={{
                pr: "24px", // keep right padding when drawer closed
                backgroundColor: "#252927"
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
                style={{
                  width: "50px",
                  borderRadius: "50%",
                  marginLeft: "auto",
                }}
              />
            </Toolbar>
          </AppBar>
        </ClickAwayListener>

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
              <ListItemText primary={translations.dashboard_Navigation.home} />
            </ListItemButton>
            <Divider sx={{my: 1}} />
            <ListItemButton onClick={() => setRoute("fdc")}>
              <ListItemText primary={translations.dashboard_Navigation.tækjaskapur} />
            </ListItemButton>
            <ListItemButton onClick={() => setRoute("doors")}>
              <ListItemText primary={translations.dashboard_Navigation.hurdar} />
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
          <Container maxWidth='lg' sx={{mt: 4, mb: 4, display: "flex", justifyContent: "center"}}>
              {/* Recent Orders */}
                <Routing route={route} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
