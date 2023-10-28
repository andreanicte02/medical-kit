import {useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import {useMediaQuery} from "@mui/material";
import DrawerMobile from "./drawer/DrawerMobile";
import {DrawerDesktop} from "./drawer/DrawerDesktop";
import {Outlet} from "react-router-dom";
import {Content} from "../../style/layout/MainLayoutStyle";

export default function MainLayout() {
    const theme = useTheme();
    const breakPointMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box sx={{display: "flex"}}>
            <CssBaseline/>
            {!breakPointMobile && <DrawerDesktop/>}
            {
                breakPointMobile && <DrawerMobile/>
            }
            <Content>
                <Outlet/>
            </Content>
        </Box>
    );
}
