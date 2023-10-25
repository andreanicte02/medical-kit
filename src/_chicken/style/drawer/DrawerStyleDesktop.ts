import {CSSObject, styled, Theme} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

const drawerWidth = 296;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 0.063rem)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 0.063rem)`,
    },
});

export const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== "open"})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        ".MuiDrawer-paper": {
            backgroundColor: theme.palette.grey.A200,
            border: "none"
        },
        ...(open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
        }),
        [theme.breakpoints.up("md")]: {
            ".MuiDrawer-paper": {

            },
        }
    }),
);