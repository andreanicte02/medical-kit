import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import {Drawer} from "../../../style/drawer/DrawerStyleMobile";
import {DrawerContainer} from "./component/DrawerContainer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store/store";
import {handleOpen} from "../../../../store/slice/drawerSlice";
import {Bar} from "../app-bar/Bar";

interface Props {
    window?: () => Window;
}

export default function DrawerMobile(props: Props) {
    const { window } = props;

    const container = window !== undefined ? () => window().document.body : undefined;

    const open = useSelector((state: RootState) => state.drawer.open)

    const dispatch = useDispatch()

    const handleDrawerToggle = () =>{
        dispatch(handleOpen());
    }

    return (
        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            <Bar/>
            <Box
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={open}
                    onClose={handleDrawerToggle}
                >
                    <DrawerContainer/>
                </Drawer>
            </Box>
        </Box>
    );
}