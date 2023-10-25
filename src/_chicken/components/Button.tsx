import {styled} from "@mui/material/styles";
import Button from '@mui/material/Button';

const ButtonOutlined = styled(Button)(({theme}) => ({
    borderRadius:"1.25rem",
    textTransform: "none",
    fontSize:"1.125rem",
    fontWeight: theme.typography.fontWeightRegular,
}));

export const ButtonOutlinedDanger = styled(ButtonOutlined)(({theme}) => ({
    color: theme.palette.common.black
}));
export const ButtonOutlinedPrimary = styled(ButtonOutlined)(({theme}) => ({
}));




