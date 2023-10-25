import {InputBase} from "@mui/material";
import Paper from "@mui/material/Paper/Paper";

export const Subject = () => {
    return (
        <>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', marginBottom: "10px", boxShadow:"none" }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Asunto"
                />
            </Paper>
        </>
    );
};