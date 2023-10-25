import {FormErrorMessages} from "../../../../_chicken/utils/enum";
import * as yup from "yup";
export interface Login{
    username: string
    password:string
}
export const schemaLogin = yup.object().shape({
    username: yup.string().required(FormErrorMessages.RequiredField),
    password: yup.string().required(FormErrorMessages.RequiredField)
});

export interface ForgotPassword{
    username: string
}

export const schemaForgotPassword = yup.object().shape({
    username: yup.string().required(FormErrorMessages.RequiredField)
})

export interface ResetPassword {
    code:string
    password1: string
    password2:string
}

export const schemaResetPassword = yup.object().shape({
    code: yup.string().required(FormErrorMessages.RequiredField),
    password1: yup.string().required(FormErrorMessages.RequiredField),
    password2: yup.string().required(FormErrorMessages.RequiredField),
})