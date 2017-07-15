import * as UserActions from 'actiontypes/user'
import * as UserEndpoints from 'api/user'
import fetchWrap from 'utils/fetchWrap'

export const requestingUserInfo = data => {
    return {
        type: UserActions.REQUESTING_USER_INFO,
        data
    }
}

export const requestUserInfoSucceeded = (data, id) => {
    return {
        type: UserActions.REQUEST_USER_INFO_SUCCEEDED,
        data,
        id
    }
}

export const requestUserInfoFailed = data => {
    return {
        type: UserActions.REQUEST_USER_INFO_FAILED
    }
}

export const requestUserInfo = (id = 'self') => {
    return async (dispatch) => {
        try {
            dispatch(requestingUserInfo(true))
            const res = await fetchWrap(UserEndpoints.info(id))
            if (res) {
                return dispatch(requestUserInfoSucceeded(res, id))
            } else {
                return dispatch(requestUserInfoFailed())
            }
        } catch (e) {
            return dispatch(requestUserInfoFailed())
        } finally {
            dispatch(requestingUserInfo(false))
        }
    }
}

export const requestingUserMedia = data => {
    return {
        type: UserActions.REQUESTING_USER_MEDIA,
        data
    }
}

export const requestUserMediaSucceeded = (data, id) => {
    return {
        type: UserActions.REQUEST_USER_MEDIA_SUCCEEDED,
        data,
        id
    }
}

export const requestUserMediaFailed = () => {
    return {
        type: UserActions.REQUEST_USER_MEDIA_FAILED
    }
}

export const requestUserMedia = (id = 'self') => {
    return async (dispatch) => {
        try {
            dispatch(requestingUserMedia(true))
            const res = await fetchWrap(UserEndpoints.recent(id))
            if (res) {
                return dispatch(requestUserMediaSucceeded(res, id))
            } else {
                return dispatch(requestUserMediaFailed())
            }
        } catch (e) {
            return dispatch(requestUserMediaFailed())
        } finally {
            dispatch(requestingUserMedia(false))
        }
    }
}
