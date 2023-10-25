import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {useState} from "react";
import {FlexFillContentEndContainer} from "../../../themes/utils";
import {theme} from "../../../themes/theme";
import * as React from "react";
import {useDispatch} from "react-redux";
import {handleOpen} from "../../../../store/slice/drawerSlice";
export const Bar = () => {
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] =useState<null | HTMLElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const dispatch = useDispatch()
    const handleDrawerToggle = () =>{
        dispatch(handleOpen());
    }
    return (
        <AppBar position="fixed" sx={{backgroundColor:theme.palette.grey.A200, height:"50px"}} elevation={0}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{color:"black", marginBottom:"8px"}}

                >
                    <MenuIcon />
                </IconButton>
                {auth && (
                    <FlexFillContentEndContainer>
                        <IconButton
                            onClick={handleMenu}
                            sx={{color:"black", marginBottom:"8px"}}

                        >
                            <AccountCircle />
                        </IconButton>
                    </FlexFillContentEndContainer>
                )}
            </Toolbar>
        </AppBar>
    );
};