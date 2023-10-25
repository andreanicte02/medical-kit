import {Box} from "@mui/material";
import {useNavigate} from "react-router-dom";
import usePasswordHook from "../../../../_chicken/hooks/usePasswordHook";
import {SubmitHandler, useForm} from "react-hook-form";
import {Login, schemaLogin} from "../core/_model";
import {yupResolver} from "@hookform/resolvers/yup";
import {EyePassword} from "../../../../_chicken/components/EyePassword";
import {AlertDanger, AlertSuccess} from "../../../../_chicken/components/Alert";
import {TextSpinner} from "../../../../_chicken/components/TextSpinner";
import {useCleanSuccessMessageHook} from "../../../../_chicken/hooks/useCleanSuccessMessageHook";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store/store";
import {logInFake} from "../../../../store/slice/currentUserSlice";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import {theme} from "../../../../_chicken/themes/theme";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import * as React from "react";

export const LoginPrimary = () => {

    const [togglePassword, showPassword] = usePasswordHook();
    const navigate = useNavigate();
    const cleanMessage = useCleanSuccessMessageHook();
    const successMessage = useSelector((state: RootState) => state.message.successMessage);
    const errorMessage = useSelector((state: RootState) => state.message.errorMessage);
    const dispatch = useDispatch();

    const formLogin = useForm<Login>({
        resolver: yupResolver(schemaLogin),
    });

    const onSubmit: SubmitHandler<Login> = (value) => {
        dispatch(logInFake());

    };

    return (
        <Box>

            <CssBaseline/>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{m: 1, backgroundColor: theme.palette.primary.main}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                        onClick={()=> dispatch(logInFake())}
                    >
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Box>


    );
};