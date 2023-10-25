import {InputAdornment} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";

interface EyePassword{
    show: boolean
    toggle: () => void
}
export const EyePassword = ({show, toggle}: EyePassword) => {
    return (
        <InputAdornment position="end">
            <IconButton
                onClick={toggle}
            >
                {show ? <Visibility/> : <VisibilityOff/>}
            </IconButton>
        </InputAdornment>
    );
};