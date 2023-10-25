import {ReactSVG} from "react-svg";
import {GenericItem, SvgWrap, TextWrap} from "../../../../style/drawer/itemStyle";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../store/store";
import {handleOpen, selectItem} from "../../../../../store/slice/drawerSlice";
import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

interface Item {
    text: string;
    path: string;
    index: number;
    redirect?: string;
}

export const Item = ({text, path, index, redirect}: Item) => {

    const selectedItem = useSelector((state: RootState) => state.drawer.selectedItem) === index;

    const open = useSelector((state: RootState) => state.drawer.open);

    const dispatch = useDispatch();

    const backgroundColor = selectedItem ? "white" : "transparent";
    const fontColor = selectedItem ? "black" : "";
    const theme = useTheme();
    const breakPointMobile = useMediaQuery(theme.breakpoints.down("md"));
    const navigate = useNavigate();

    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath === redirect) {
            dispatch(selectItem(index));
        }
    }, []);

    const onClickSelectItem = () => {
        //---ux
        if (redirect === undefined) return;
        navigate(redirect);

        //---ui
        dispatch(selectItem(index));
        if (!breakPointMobile) return;
        dispatch(handleOpen());
    };


    return (
        <GenericItem onClick={onClickSelectItem} sx={{backgroundColor: backgroundColor, color: fontColor, borderRadius: "1.25rem"}}>
            <SvgWrap>
                <ReactSVG src={path}></ReactSVG>
            </SvgWrap>
            <TextWrap>
                {open && text}
            </TextWrap>
        </GenericItem>
    );
};