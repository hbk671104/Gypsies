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
    return (dispatch) => {
        const params = getUrlParams(url)
        if (params && params.access_token) {
            dispatch(requestAccessTokenSucceeded(params.access_token))
            return dispatch(cacheAccessToken(params.access_token))
        } else {
            return dispatch(requestAccessTokenFailed())
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
    return async (dispatch) => {
        try {
            await AsyncStorage.setItem('access_token', token)
            return dispatch(cacheAccessTokenSucceeded())
        } catch (e) {
            if (e) {
                return dispatch(cacheAccessTokenFailed())
            }
        }
    }
}

export const getAccessTokenSucceeded = data => {
    return {
        type: AuthActionTypes.GET_ACCESS_TOKEN_SUCCEEDED,
        data
    }
}

export const getAccessTokenFailed = () => {
    return {
        type: AuthActionTypes.GET_ACCESS_TOKEN_FAILED
    }
}

export const getAccessToken = () => {
    return async (dispatch) => {
        try {
            const token = await AsyncStorage.getItem('access_token')
            return dispatch(getAccessTokenSucceeded(token))
        } catch (e) {
            if (e) {
                return dispatch(getAccessTokenFailed())
            }
        }
    }
}
