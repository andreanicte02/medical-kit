import {Route, Routes} from "react-router-dom";
import { LoginMain } from "./login/component/LoginMain";
import {Login} from "./login/Login";

export const AuthPage = () => {

    return (
        <Routes>
            <Route element={<Login/>}>
                <Route path={'login'} element={<LoginMain/>}></Route>
                <Route index element={<LoginMain/>}/>
            </Route>
        </Routes>
    );
};