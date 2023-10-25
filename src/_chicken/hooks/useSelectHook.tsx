import { useState } from 'react';
import {SelectChangeEvent} from "@mui/material";

export const useSelectHook = (): [string, (event: SelectChangeEvent) => void] => {
    const [data, setData] = useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {
        setData(event.target.value);
    };

    return [data, handleChange];
};
