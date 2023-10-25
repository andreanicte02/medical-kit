import {KeyLocalStorage} from "./enum";
import {Information} from "./interface";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";

export const getHeader = (headers: Headers, getState: () => unknown) => {
    //const token = (getState() as RootState).currentUser.user.sessionId;
    //if (!token) return headers;
    //headers.set("Authorization", `Bearer ${token}`);
    return headers;
};

export const createSessionTime = (expires: number) => {

    const now = Date.now();
    const schedule = JSON.stringify(now + expires * 1000);
    return schedule; //get session time

};

export const getUserLocalStorage = () => {

    const storedExpiresIn = Number(localStorage.getItem(KeyLocalStorage.TIMEOUT));
    const expiresIn = isNaN(storedExpiresIn) ? 0 : Math.abs(storedExpiresIn);

    if (expiresIn < Date.now()) {
        localStorage.clear();
        return null;
    }

    const data = localStorage.getItem(KeyLocalStorage.USER);

    if (data === null) return undefined;

    return data;
};

export const logOut = () => {
    localStorage.clear();
    document.location.reload();
};

export const getLocalStorage = (key: string): string | null => {

    return localStorage.getItem(key);

};

export const deleteLocalStorage = (key: string) => {
    localStorage.removeItem(key);
};

export const setLocalStorage = (key: string, value: string) => {


    if (localStorage.getItem(key) !== null) deleteLocalStorage(key);

    localStorage.setItem(key, value);

};

export const getBrowser = () => {

    const userAgent = (() => {
        const ua = navigator.userAgent;
        let tem;
        let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return "IE " + (tem[1] || "");
        }
        if (M[1] === "Chrome") {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null) return tem.slice(1).join(" ").replace("OPR", "Opera");
        }
        M = M[2] ? [M[1], M[2]] : [navigator.userAgent, "-?"];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
        return M.join(" ");
    })().toString();

    const userAgentArray = userAgent;

    if (userAgentArray === null || userAgentArray === undefined) {
        return ["N/A", "N/A"];
    }

    if (userAgent.length < 2) {
        return ["N/A", "N/A"];
    }

    return [userAgent.split(" ")[0], userAgent.split(" ")[1]];

};

export const initializeInformation = (): Information => {
    return {
        browserName: getBrowser()[0],
        browserVersion: getBrowser()[1],
        osIanaTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        appLanguage: navigator.language,
        osTimezone: new Date().getTimezoneOffset() * 60,
        appVersion: "1.0.0"
    };
};

export const getRTKErrorMessage = (error: SerializedError | FetchBaseQueryError | undefined): string => {

    //console.log(error);

    if (error === undefined || error === null) {
        return "Ocurrió un error, intente nuevamente";
    }

    if (!("data" in error && error.data)) {
        return "Ocurrió un error, intente nuevamente"; //content data empity
    }

    const data = error.data as { info?: { type?: string, message?: string, title?: string } };

    //console.log(data);

    //debugger;
    return (
        `${data.info?.title ? `${data.info.title}: ` : ""}${data.info?.message}` //en el ticket dice que hay que retornar el titulo mas el mensaje pero no todas las respuestas tienen tietulo y mensaje
    );

};

export const formatDate = (originalDate: string): string => {
    const date = new Date(originalDate);

    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

