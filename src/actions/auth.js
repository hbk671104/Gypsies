import * as AuthActionTypes from 'actiontypes/auth'

export const requestAccessTokenStart = data => {
    return {
        type: AuthActionTypes.REQUEST_ACCESS_TOKEN_START,
        data
    }
}

export const requestAccessTokenSucceeded = data => {
    return {
        type: AuthActionTypes.REQUEST_ACCESS_TOKEN_SUCCEEDED,
        data
    }
}

export const requestAccessTokenFailed = data => {
    return {
        type: AuthActionTypes.REQUEST_ACCESS_TOKEN_FAILED
        data
    }
}
