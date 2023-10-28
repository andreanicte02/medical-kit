import {Navigate, Route, Routes} from "react-router-dom";
import MainLayout from "../_chicken/layout/main-layout/MainLayout";
import {SearchPage} from "../modules/search-history/SearchPage";
import {CreateHistoryPage} from "../modules/create-history/CreateHistoryPage";

export const PrivateRoute = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>

                <Route path="auth/*" element={<Navigate to="/search/list"/>}/>

                <Route
                    path="search/*"
                    element={
                        <SearchPage/>
                    }
                />

                <Route
                    path="create/*"
                    element={
                        <CreateHistoryPage/>
                    }
                />
            </Route>
        </Routes>
    );
};