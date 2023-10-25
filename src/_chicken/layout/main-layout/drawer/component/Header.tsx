import { medicalKitIcon} from "../../../../utils/image";
import {Box} from "@mui/material";
import {
    ArrowIcon,
    IconClosedBarWrap,
    MainHeader,
    SecondaryHeader
} from "../../../../style/drawer/HeaderStyle";
import {FlexFillContainer} from "../../../../themes/utils";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../store/store";
import {handleOpen} from "../../../../../store/slice/drawerSlice";

export const Header = () => {

    const open = useSelector((state: RootState) => state.drawer.open);
    const dispatch = useDispatch();

    const handleDrawer = () => {
        dispatch(handleOpen());
    };

    return (
        <>
            {
                open &&
                <>
                    <MainHeader>
                        Bienvenido
                    </MainHeader>

                    <SecondaryHeader>
                        <FlexFillContainer>
                            Menú
                        </FlexFillContainer>
                        <Box>
                            <ArrowIcon onClick={handleDrawer} sx={{marginRight: 1}}>
                                <i className="bi bi-arrow-left-short"></i>
                            </ArrowIcon>
                        </Box>
                    </SecondaryHeader>
                </>
            }

            {!open &&
                <>

                    <IconClosedBarWrap>
                        <img src={medicalKitIcon} style={{width: 46, height: 20}}/>
                    </IconClosedBarWrap>

                    <SecondaryHeader>
                        <ArrowIcon onClick={handleDrawer}>
                            <i className="bi bi-arrow-right-short"></i>
                        </ArrowIcon>
                    </SecondaryHeader>

                </>
            }
        </>
    );
};