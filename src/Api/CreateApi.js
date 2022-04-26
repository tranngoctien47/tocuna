import axios from "axios"
import { port } from "../port"

export default {


    CreateApiS: (url, data, token) => {
        if (token) {
            token = JSON.parse(localStorage.getItem('auth'))
        }
        return axios(`${port}${url}`, {
            headers: {
                'Authorization': 'Bearer ' + token?.token
            },

            method: 'POST',
            data
        })
    },
    CreateApiSS: (url, data) => {
        return axios(`${port}${url}`, {
            method: 'POST',
            data
        })

    },

    CreateApiSR: (url, data) => {
        return axios(`${port}${url}`, {
            method: 'POST',
            data

        })
    },
    CreateApiSSS: (url, token) => {
        if (token) {
            token = JSON.parse(localStorage.getItem('auth'))
        }
        return axios(`${port}${url}`, {
            headers: {
                'Authorization': 'Bearer ' + token?.token
            },

            method: 'POST',

        })
    },
    CreateApiSSSS: (url) => {

        return axios(`${port}${url}`, {
            method: 'POST',

        })
    },
    CreateApiSSSSS: (url) => {

        return axios(`${port}${url}`, {
            method: 'GET',

        })
    },

}