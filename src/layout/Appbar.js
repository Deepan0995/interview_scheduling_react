import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import profile from "../images/profile.svg";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";

import { Avatar, Button, Grid, InputAdornment, TextField } from "@mui/material";

import { Route, Routes, useNavigate } from "react-router-dom";

import Home from "../pages/Home";

const drawerWidth = 270;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(10)} + 20px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
});
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  
  ...theme.mixins.toolbar,
}));
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "white",
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
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
export default function Appbar() 
{
  const [searchInput, setSearchInput] = React.useState("");
  const [iconclick, setIconclick] = React.useState(false);
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();
  const handleCalender = () => {
    navigate("/");
    setIconclick(!iconclick);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const textFieldStyle = {
    backgroundColor: "white",
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Grid
            container
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item >
              <Box sx={{ background: "#888888", padding: "15px", ml: 10 }}>
                <Typography>LOGO</Typography>
              </Box>
            </Grid>
            <Grid
              item
              lg={9}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Grid item>
                <TextField
                  size="small"
                  type="search"
                  value={searchInput}
                  onChange={handleSearchInputChange}
                  placeholder="Search"
                  sx={textFieldStyle}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#424242",
                    textTransform: "none",
                  }}
                >
                  Visit career page
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#856CCA",
                    textTransform: "none",
                  }}
                >
                  Create job
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  style={{
                    color: "#856CCA",
                    borderColor: "#856CCA",
                    textTransform: "none",
                  }}
                  startIcon={<PersonAddAlt1Icon />}
                >
                  Add Applicant
                </Button>
              </Grid>

              <Grid
                item
                display={"flex"}
                justifyContent={"space-between"}
                paddingLeft={"20px"}
                columnGap={2}
              >
                <IconButton sx={{ color: "#000000" }}>
                  <NotificationsNoneIcon />
                </IconButton>
                <IconButton sx={{ color: "#000000" }}>
                  <SettingsIcon />
                </IconButton>
                <IconButton>
                  <Avatar alt="user" src={profile} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 1,
                justifycontent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <DashboardCustomizeOutlinedIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              ></DashboardCustomizeOutlinedIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifycontent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <WorkOutlineOutlinedIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              ></WorkOutlineOutlinedIcon>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifycontent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <PersonPinOutlinedIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              ></PersonPinOutlinedIcon>
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={handleCalender}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifycontent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <CalendarMonthOutlinedIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: iconclick ? "#856CCA" : "black",
                }}
              ></CalendarMonthOutlinedIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifycontent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <AssignmentOutlinedIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              ></AssignmentOutlinedIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifycontent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <DonutSmallOutlinedIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              ></DonutSmallOutlinedIcon>
            </ListItemButton>
          </ListItem>
        </List>
        <Grid item display={"flex"} columnGap={2} sx={{ marginTop: "auto" }}>
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 1,
                  justifycontent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <SettingsOutlinedIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                ></SettingsOutlinedIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 1,
                  justifycontent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ContactSupportOutlinedIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                ></ContactSupportOutlinedIcon>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 1,
                  justifycontent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <LogoutOutlinedIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                ></LogoutOutlinedIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Drawer>
      <DrawerHeader />
      <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Box>
    </Box>
  );
}
