import {styled} from "@mui/material/styles";
import {Alert, Collapse} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {cleanErrorMessage, cleanSuccessMessage} from "../../store/slice/messageSlice";

const AlertGeneric = styled(Alert)(({theme}) => ({
    border: "0.063rem solid",
    borderRadius: "0.75rem",
    fontWeight: theme.typography.fontWeightRegular
}));

const AlertGreen = styled(AlertGeneric)(({theme}) => ({
    backgroundColor: theme.palette.success.light,
    borderColor: theme.palette.success.main,
    color: theme.palette.success.main,
}));

const AlertRed = styled(AlertGeneric)(({theme}) => ({
    backgroundColor: theme.palette.error.light,
    borderColor: theme.palette.error.main,
    color: theme.palette.error.main,
}));

interface AlertProps {
    text: string;
    show: boolean;
}

export const AlertSuccess = ({text, show}: AlertProps) => {
    const [open, setOpen] = useState(false);
    const dispatch =useDispatch();

    useEffect(() => {
        if (show === undefined) return;
        setOpen(show);
    }, [show]);

    const onClose = () =>{
        setOpen(false);
        dispatch(cleanSuccessMessage());
    }

    return (
        <Collapse in={open}>
            <AlertGreen onClose={onClose} icon={false}>{text}</AlertGreen>
        </Collapse>
    );
};


export const AlertDanger = ({text, show}: AlertProps) => {

    const [open, setOpen] = useState(false);
    const dispatch =useDispatch();

    useEffect(() => {
        if (show === undefined) return;
        setOpen(show);
    }, [show]);

    const onClose = () => {
        setOpen(false);
        dispatch(cleanErrorMessage());
    };

    return (
        <Collapse in={open}>
            <AlertRed onClose={onClose} icon={false}>{text}</AlertRed>
        </Collapse>
    );
};