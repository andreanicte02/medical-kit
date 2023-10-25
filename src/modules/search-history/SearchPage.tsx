import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import {HistoryList} from "./list/HistoryList";

export const SearchPage = () => {
    return (
        <Routes>
            <Route element={<Outlet/>}>
                <Route path={'list'} element={<HistoryList/>}/>
                <Route index element={<Navigate to={"list"}/>}></Route>
            </Route>
        </Routes>
    );
};