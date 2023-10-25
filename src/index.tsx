import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {store} from "./store/store";
import {Provider} from "react-redux";
import {AppRoute} from "./routing/AppRoute";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Provider store={store}>
        <AppRoute/>
    </Provider>
);

reportWebVitals();
