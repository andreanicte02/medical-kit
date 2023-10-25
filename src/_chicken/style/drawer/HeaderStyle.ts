import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";


export const MainHeader = styled("div")(({theme}) => ({
    marginTop: "1.563rem",
    marginLeft: "1.188rem",
    display: "flex",
    fontSize: "1.25rem",
    paddingBottom: "2rem",
    color: theme.palette.common.black,
    alignItems: "center",
    textAlign:"center",

}));

export const SecondaryHeader = styled(Box)(({theme}) => ({
    marginLeft: "1.513rem",
    display: "flex",
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.disabled,
    fontSize: "1.063rem",
    paddingBottom:"0.625rem"
}));

export const ArrowIcon = styled(Box)(({theme}) => ({
    width:"1.375rem",
    height:"1.375rem",
    background:theme.palette.common.white,
    cursor:"pointer",
    color: theme.palette.common.black,
    borderRadius: "0.625rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: theme.typography.fontWeightMedium
}));

export const IconClosedBarWrap =styled(Box)(({theme}) => ({
    marginTop:"1.875rem",
    marginLeft:"0.625rem",
    marginRight:'0.375rem',
    paddingBottom:"2rem",
    width:"3.125rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const IconOpenBarWrap =styled(Box)(({theme}) => ({
    width:"3.125rem",
}));
