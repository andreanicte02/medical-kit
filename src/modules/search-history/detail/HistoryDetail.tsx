import {Box, Button, TextField} from "@mui/material";
import {FlexFillContentEndContainer} from "../../../_chicken/themes/utils";

export const HistoryDetail = () => {
    return (
        <>
            <Box
                component="form"
                noValidate
                autoComplete="off"
            >
                <Box>

                    <TextField
                        label="Nombre"
                        defaultValue="Juan Jose"
                        fullWidth
                    />

                </Box>

                <Box sx={{marginTop: "15px"}}>
                    <TextField label="Asunto" defaultValue={"Dolor de estomago"} fullWidth/>
                </Box>

                <Box sx={{marginTop: "15px"}}>
                    <TextField label="Descripción" defaultValue={"El paciente ingreso con los sintomas de tal y tal y tal"} fullWidth multiline rows={5}/>
                </Box>

                <Box sx={{marginTop: "15px"}}>
                    <TextField label="Tratamiento" defaultValue={"5mg de paracetamol"} fullWidth multiline rows={5}/>
                </Box>

                <FlexFillContentEndContainer sx={{marginTop: "15px"}}>
                    <Button variant="contained">Editar</Button>
                </FlexFillContentEndContainer>
            </Box>
        </>
    );
};