import React, { useContext } from 'react'
import { useState } from 'react'
import vi from "./vi.json"
import en from "./en.json"

let initialState = {
    default: localStorage.getItem('lang') || 'en',
    en, vi
}
const Context = React.createContext(initialState)

export default function TranslateProvider({ children }) {

    let [state, setState] = useState({ ...initialState })


    function setTranslate(lang) {
        localStorage.setItem('lang', lang)
        setState({
            ...state,
            default: lang,
        })
    }

    function t(key) {
        return state?.[state.default]?.[key] || key
    }

    let value = {
        t,
        setTranslate,
        lang: state.default
    }

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export function useTranslate() {
    let { t, setTranslate, lang } = useContext(Context)
    return {
        t,
        setTranslate,
        lang
    }
}


