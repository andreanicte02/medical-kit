import {Route, Routes} from "react-router-dom";
import { LoginPrimary } from "./login/component/LoginPrimary";
import {Login} from "./login/Login";

export const AuthPage = () => {

    return (
        <Routes>
            <Route element={<Login/>}>
                <Route path={'login'} element={<LoginPrimary/>}></Route>
                <Route index element={<LoginPrimary/>}/>
            </Route>
        </Routes>
    );
};