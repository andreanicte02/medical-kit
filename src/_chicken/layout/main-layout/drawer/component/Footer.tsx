import {Box, Divider} from "@mui/material";
import * as React from "react";
import {ReactSVG} from "react-svg";
import {logoutIcon} from "../../../../utils/image";
import {GenericFooter, SvgWrap, TextWrap} from "../../../../style/drawer/itemStyle";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../store/store";
import {logOutFake} from "../../../../../store/slice/currentUserSlice";


export const Footer = () => {

    const open = useSelector((state: RootState) => state.drawer.open)
    const dispatch = useDispatch();

    return (
        <>

            <Box paddingRight={3} paddingLeft={3}>
                <Divider sx={{marginBottom: "1"}}/>
            </Box>
            <GenericFooter tabIndex={0} onClick={()=>dispatch(logOutFake())}>
                <SvgWrap>
                    <ReactSVG src={logoutIcon}></ReactSVG>
                </SvgWrap>
                <TextWrap>
                    {open && "Cerrar sesión"}
                </TextWrap>
            </GenericFooter>
        </>
    );
};