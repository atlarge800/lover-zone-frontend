/* eslint-disable */

export class ServerError {
    constructor(code, message) {
        this.code = code
        this.message = message
    }
}

export default async function wrapper(promise) {
    return promise.then(data => {
        if (data.status !== 200) {
            throw new ServerError(data.status, data.statusText)
        }
        data = data.data
        if (data.result === undefined) {
            let error_code = data.error.code
            let error_message = data.error.message
            throw new ServerError(error_code, error_message)
        }
        return data
    });
}