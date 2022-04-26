import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import CreateApi from '../../Api/CreateApi'
import { AxiosLogin, RemoveRECAPTCHA2FA } from "../../redux/reducers/authReducers";
import { Loadding, LoaddingLogin } from "../../redux/reducers/isDifferentReducer";

import { ErrorMessage } from "../message";
const WithLogin = (Component) => {
    const NewComponent = (props) => {
        let navigate = useNavigate();
        let { ...user } = props;
        let dispatch = useDispatch()
        const submit = async (e) => {
            e.preventDefault()
            dispatch(LoaddingLogin(true))
            if (user?.token)
                if (user?.userName?.length > 0 && user?.password?.length > 0)
                    try {
                        let res = await CreateApi.CreateApiSS('api/user/login', { userName: user?.userName, password: user?.password })
                        dispatch(RemoveRECAPTCHA2FA(0))
                        if (res?.data?.data?.id == 1 || res?.data?.data?.id == 111 || res?.data?.data?.id == 109) {
                            dispatch(AxiosLogin(res?.data?.data))
                            navigate('/');
                        } else {
                            ErrorMessage("You do not have access")
                        }
                    } catch (error) {
                        dispatch(RemoveRECAPTCHA2FA(0))
                        ErrorMessage("Wrong password")
                        // if (error?.response?.data?.errors == 11) ErrorMessage("Code 2FA Emty")
                        // else ErrorMessage("Wrong password")
                    }
                else {
                    ErrorMessage("Please complete all information")
                }
            else {
                ErrorMessage("pleads res")
            }
            dispatch(LoaddingLogin(false))




        };

        return <Component {...user} submit={submit} />;
    };
    return NewComponent;
};
export default WithLogin;
