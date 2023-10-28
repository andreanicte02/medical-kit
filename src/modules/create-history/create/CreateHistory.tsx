import {Subject} from "./components/Subject";
import {Box, Button, FormLabel, TextField} from "@mui/material";
import {FlexFillContentEndContainer} from "../../../_chicken/themes/utils";

export const CreateHistory = () => {
    return (
        <div>

            <Box>
                <TextField label="Nombre" variant="outlined" fullWidth />
            </Box>

            <Box sx={{marginTop:"15px"}}>
                <TextField label="Asunto" variant="outlined" fullWidth />
            </Box>

            <Box sx={{marginTop:"15px"}}>
                <TextField label="Descripción" variant="outlined" fullWidth multiline  rows={5} />
            </Box>

            <Box sx={{marginTop:"15px"}}>
                <TextField label="Tratamiento" variant="outlined" fullWidth multiline  rows={5} />
            </Box>

            <FlexFillContentEndContainer sx={{marginTop:"15px"}}>
                <Button variant="contained">Guardar</Button>
            </FlexFillContentEndContainer>

        </div>
    );
};