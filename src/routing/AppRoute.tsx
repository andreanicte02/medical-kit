import {useSelector} from "react-redux";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import App from "../App";
import {AuthPage} from "../modules/auth/AuthPage";
import {RootState} from "../store/store";
import { PrivateRoute } from "./PrivateRoute";

const {PUBLIC_URL} = process.env;
export const AppRoute = () => {

    const user = useSelector((state: RootState) => state.currentUser);

    return (
        <BrowserRouter basename={PUBLIC_URL}>
            <Routes>
                <Route element={<App/>}>
                    {user.logIn ? (
                        <>
                            <Route path="/*" element={<PrivateRoute/>}/>
                            <Route index element={<Navigate to="/search"/>}/>
                        </>
                    ) : (
                        <>
                            <Route path="auth/*" element={<AuthPage/>}/>
                            <Route path="*" element={<Navigate to="/auth"/>}/>
                        </>
                    )}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};