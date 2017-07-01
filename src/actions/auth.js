import { AsyncStorage } from 'react-native'
import * as AuthActionTypes from 'actiontypes/auth'
import { getUrlParams } from 'utils/urlHelper'

export const requestingAccessToken = data => {
    return {
        type: AuthActionTypes.REQUESTING_ACCESS_TOKEN,
        data
    }
}

export const requestAccessTokenSucceeded = data => {
    return {
        type: AuthActionTypes.REQUEST_ACCESS_TOKEN_SUCCEEDED,
        data
    }
}

export const requestAccessTokenFailed = () => {
    return {
        type: AuthActionTypes.REQUEST_ACCESS_TOKEN_FAILED
    }
}

export const extractAccessToken = url => {
    return dispatch => {
        const params = getUrlParams(url)
        if (params && params.access_token) {
            dispatch(requestAccessTokenSucceeded(params.access_token))
            dispatch(cacheAccessToken(params.access_token))
        } else {
            dispatch(requestAccessTokenFailed())
        }
    }
}

export const cacheAccessTokenSucceeded = () => {
    return {
        type: AuthActionTypes.CACHE_ACCESS_TOKEN_SUCCEEDED
    }
}

export const cacheAccessTokenFailed = () => {
    return {
        type: AuthActionTypes.CACHE_ACCESS_TOKEN_FAILED
    }
}

export const cacheAccessToken = token => {
    return dispatch => {
        AsyncStorage.setItem('access_token', token)
        .then(() => {
            dispatch(cacheAccessTokenSucceeded())
        })
        .catch(e => {
            if (e) {
                dispatch(cacheAccessTokenFailed())
            }
        })
    }
}
