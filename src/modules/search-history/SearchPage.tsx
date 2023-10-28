import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import {HistoryList} from "./list/HistoryList";
import {HistoryDetail} from "./detail/HistoryDetail";

export const SearchPage = () => {
    return (
        <Routes>
            <Route element={<Outlet/>}>
                <Route path={'history'} element={<HistoryList/>}/>
                <Route path={'detail/:id'} element={<HistoryDetail/>}/>
                <Route index element={<Navigate to={"history"}/>}></Route>
            </Route>
        </Routes>
    );
};