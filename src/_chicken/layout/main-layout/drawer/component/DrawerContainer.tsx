import * as React from "react";
import {Header} from "./Header";
import {ItemList} from "./ItemList";
import {Footer} from "./Footer";

export const DrawerContainer = () => {
    return (
        <>
            <Header/>
            <ItemList />
            <Footer />
        </>
    );
};