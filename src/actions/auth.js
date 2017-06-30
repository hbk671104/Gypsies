import * as AuthActionTypes from 'actiontypes/auth'
import { oAuth } from 'api/auth'
import { getUrlParams } from 'utils/urlHelper'

export const requestAccessTokenStart = () => {
    return {
        type: AuthActionTypes.REQUEST_ACCESS_TOKEN_START
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

export const requestAccessToken = () => {
    return (dispatch) => {
        // dispatch(requestAccessTokenStart())
        fetch(oAuth)
        .then(res => {
            const params = getUrlParams(res.url)
            console.log(params);
            if (params && params.access_token) {
                // dispatch(requestAccessTokenSucceeded(params.access_token))
            } else {
                // dispatch(requestAccessTokenFailed())
            }
        })
        .catch(e => {
            // dispatch(requestAccessTokenFailed())
        })
    }
}
