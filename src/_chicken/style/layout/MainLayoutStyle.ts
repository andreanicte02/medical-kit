import {styled} from "@mui/material/styles";
import {FlexFillColumnContainer} from "../../themes/utils";

export const Content = styled(FlexFillColumnContainer)(({theme}) => ({
    marginTop: "3.563rem",
    marginBottom: "0.563rem",
    marginLeft: "0.688rem",
    marginRight: "0.688rem",
    [theme.breakpoints.down("md")]: {
        marginTop: "4.313rem",
    },
}));