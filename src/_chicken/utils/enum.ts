import exp from "constants";

export enum KeyLocalStorage {
    USER = 'user',
    TIMEOUT = 'timeOut',
    TIMEOUTVALUE = 36000,
}

export enum FormErrorMessages{
    RequiredField ='Este campo es requerido',
    InvalidEmail = 'El correo electrónico no es válido'
}

export enum Rol{
    ADMIN='admin',
    OPERATOR='operator'
}

export enum TransactionColor{
    info='info',
    success='success',
    danger='danger'
}

export const TransactionStatusColor = {
    pending: "info",
    completed: "success",
    rejected: "danger",
    canceled: "danger",
    unassigned: "info",
    refunded: "info",
    expired: "danger",
};

export const TransactionStatusTitles = {
    pending: "Pendiente",
    completed: "Pagado",
    rejected: "Rechazada",
    canceled: "Anulada",
    unassigned: "Sin asignar",
    refunded: "Reembolsada",
    expired: "Expirada",
};

export enum TypeTransaction{
    pending,
    paid,
    unassigned
}