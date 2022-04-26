import React from "react"
import { useDispatch } from "react-redux"
import ReCAPTCHA from 'react-google-recaptcha';
import { TokenReCaptcha } from "page/Redux/reducer/authReducer";




export default function RecaptchaLogin() {
    let reRef = React.useRef()
    let reCaptcha = React.useRef()
    let dispatch = useDispatch()
    const [token, setStateToken] = React.useState('')

    const handleRecaptcha = (token) => {
        if (token) {
            dispatch(TokenReCaptcha(token))
        }
    }

    return (
        <ReCAPTCHA

            ref={reRef}
            sitekey="6LdflhodAAAAAJXLVHcko0p8_6QYYTXFTaOwPUA4"
            ref={reCaptcha}
            onChange={async (token) => { handleRecaptcha(token) }
            }
            onExpired={(e) => {
                setStateToken("");
            }}
        />
    )
}