import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";

export const fontSizeItemBar = "17px";
export const FlexFillContainer = styled("div")(({theme}) => ({
    display: "flex",
    flex: 1
}));

export const FlexFillCenterContainer = styled("div")(({theme}) => ({
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
}));

export const FlexFillContentEndContainer = styled("div")(({theme}) => ({
    display: "flex",
    flex: 1,
    justifyContent: "flex-end"
}));

export const FlexFillColumnContainer = styled("div")(({theme}) => ({
    display: "flex",
    flex: 1,
    flexDirection: "column"
}));

export const FlexFillColumnCenterContainer = styled("div")(({theme}) => ({
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    height:"100%"
}));

export const FlexCenterContainer = styled("div")(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height:"100vh"
}));

