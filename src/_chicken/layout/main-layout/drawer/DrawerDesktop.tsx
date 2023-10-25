import {Drawer} from "../../../style/drawer/DrawerStyleDesktop";
import {DrawerContainer} from "./component/DrawerContainer";
import {RootState} from "../../../../store/store";
import {useSelector} from "react-redux";
import {Bar} from "../app-bar/Bar";

export const DrawerDesktop = () => {
    const open = useSelector((state: RootState) => state.drawer.open);
    return (
        <>
            <Bar/>
            <Drawer variant="permanent" open={open}>
                <DrawerContainer/>
            </Drawer>
        </>
);

};
