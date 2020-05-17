import { API } from '@/config'
import request from './request'

export async function getProfileConfig() {
    return request.get(API.PROFILE_GET_CONFIG).then(data => {
        return data.result
    })
}
