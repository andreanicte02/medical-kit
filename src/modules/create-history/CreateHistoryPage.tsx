import {Outlet, Route, Routes} from "react-router-dom";
import {CreateHistory} from "./create/CreateHistory";

export const CreateHistoryPage = () => {
    return (
        <Routes>
            <Route element={<Outlet/>}>
                <Route path={'history'} element={<CreateHistory/>}/>
                <Route index element={<CreateHistory/>}></Route>
            </Route>
        </Routes>
    );
};