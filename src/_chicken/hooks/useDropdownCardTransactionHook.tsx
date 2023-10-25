import { useState } from 'react';

const useDropdownCardTransactionHook = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return {
        anchorEl,
        open,
        handleClick,
        handleClose,
    };
};

export default useDropdownCardTransactionHook;