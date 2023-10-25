import * as React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper/Paper";
import {
    FlexCenterContainer,
} from "../../../_chicken/themes/utils";
import {Outlet} from "react-router-dom";


export const Login = () => {

    return (


        <FlexCenterContainer>
            <Paper>
                <Container component="main" maxWidth="xs" sx={{paddingBottom:"2rem", paddingTop:"2rem"}}>
                    <Outlet></Outlet>
                </Container>
            </Paper>
        </FlexCenterContainer>
    );
};