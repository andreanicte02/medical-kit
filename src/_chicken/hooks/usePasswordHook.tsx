import {useState} from "react";

const usePasswordHook = ():[togglePassword: () => void, showPassword: boolean ] => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword=():void=> {
        setShowPassword(!showPassword);
    }

    return[togglePassword, showPassword]

}

export default usePasswordHook;