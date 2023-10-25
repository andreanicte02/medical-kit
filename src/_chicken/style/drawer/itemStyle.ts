import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
import {fontSizeItemBar} from "../../themes/utils";

export const GenericItem = styled(Box,{shouldForwardProp: (prop) => prop !== "isSelect"})(({theme}) => ({

    transition: "all 0.2s ease-in",
    "span[class^='ion']": {
        position: "relative"
    },

    cursor: "pointer",
    display: "flex",
    fontSize: fontSizeItemBar,
    width: "16.625rem",

    marginLeft: "0.313rem",

    color: theme.palette.text.primary,

    paddingBottom: "0.625rem",
    paddingTop: "0.75rem",

    ":hover": {
        backgroundColor: theme.palette.primary.contrastText,
        borderRadius: "1.25rem",
        color: theme.palette.grey.A700
    }

}));


export const SvgWrap = styled(Box)(({theme}) => ({
    marginLeft:"0.625rem",
    marginRight:'0.375rem',
    width:"2.188rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const TextWrap = styled(Box)(({theme}) => ({
    marginTop:"0.125rem"
}));


export const GenericFooter = styled(Box)(({theme}) => ({

    transition: "all 0.2s ease-in",
    "span[class^='ion']": {
        position: "relative"
    },

    cursor: "pointer",
    display: "flex",
    fontSize: fontSizeItemBar,
    width: "16.625rem",

    marginLeft: "0.313rem",

    color: theme.palette.common.black,

    paddingBottom: "0.625rem",
    paddingTop: "0.75rem",
    marginBottom:"1.25rem",
    marginTop:"0.313rem",

    ":hover": {
        backgroundColor: theme.palette.primary.contrastText,
        borderRadius: "1.25rem",
        color: theme.palette.grey.A700
    }

}));

