import reduxToolkit from "../../core/reduxToolkit"

let initialState = {
    login: JSON.parse(localStorage.getItem('auth')) || '',
    login: '',
    gettoken: false,
    getprofile: ''

}

let { reducer, type, action } = reduxToolkit({
    name: 'auth',
    initialState,
    reducers: {
        AxiosLogin(state, action) {
            localStorage.setItem('auth', JSON.stringify(action.payload))
            return {
                ...state,
                login: action.payload,
                loadding: false,
                gettoken: false


            }
        },


        TokenReCaptcha(state, action) {
            return {
                ...state,
                gettoken: action.payload,
            }
        },

        GetProfile(state, action) {
            return {
                ...state,
                getprofile: action.payload,
            }
        },

        RemoveRECAPTCHA2FA(state, action) {
            if (action.payload == 0) {
                window.grecaptcha.reset();
            }
            return {
                ...state,
                gettoken: '',
                getvalue2fa: ''


            }
        },
    }
})

export default reducer;

export const AUTH = type;

export const { AxiosLogin, TokenReCaptcha, GetProfile, RemoveRECAPTCHA2FA } = action;


