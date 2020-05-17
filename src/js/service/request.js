/* eslint-disable */
import axios from 'axios'
import { API_HOST, HTTP_TIMEOUT } from '@/config'
import wrapper from './error'

function api(url) {
    return API_HOST + url
}

export default {
    get: function (url, config) {
        config = typeof config === undefined ? {} : config
        config = Object.assign({
            timeout: HTTP_TIMEOUT,
            withCredentials: true,
        }, config)
        return wrapper(axios.get(api(url), config))
    },
    post: function (url, data, config) {
        config = typeof config === undefined ? {} : config
        config = Object.assign({
            timeout: HTTP_TIMEOUT,
            withCredentials: true,
        }, config)
        return wrapper(axios.post(api(url), data, config))
    }
}