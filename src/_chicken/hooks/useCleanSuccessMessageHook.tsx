import {cleanErrorMessage, cleanSuccessMessage} from "../../store/slice/messageSlice";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const useCleanSuccessMessageHook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(cleanErrorMessage());
        const timer = setTimeout(() => {
            dispatch(cleanSuccessMessage())
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, []);
}