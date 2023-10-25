import {styled} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

export const Drawer = styled(MuiDrawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: 296,
        //backgroundColor: theme.palette.secondary.contrastText,
    },
}));