import {CircularProgress} from "@mui/material";

interface TextSpinner {
    isLoading: boolean,
    text: string,
    textSpinner: string
}

export const TextSpinner = ({isLoading, text, textSpinner}: TextSpinner) => {
    return (
        <>
            {isLoading ? (
                <>
                    {textSpinner}
                    <CircularProgress color="inherit" size={20} sx={{ marginLeft: 1 }} />
                </>
            ) : (
                <>{text}</>
            )}
        </>
    );
};