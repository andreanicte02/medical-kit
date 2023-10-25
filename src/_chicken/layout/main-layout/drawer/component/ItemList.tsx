import {Item} from "./Item";
import {
    historyIcon,
    documentIcon,
} from "../../../../utils/image";
import {FlexFillColumnContainer} from "../../../../themes/utils";


export const ItemList = () => {


    return (
        <FlexFillColumnContainer>

            <Item path={historyIcon} redirect={"/search/history"} text={"Historial"} index={0}></Item>

            <Item path={documentIcon} redirect={"/create/history"} text={"Crear historia"} index={1}></Item>

        </FlexFillColumnContainer>
    );
};