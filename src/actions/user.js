import * as MediaActions from 'actiontypes/user'
import * as UserEndpoints from 'api/user'
import fetchWrap from 'utils/fetchWrap'

export const requestingUserMedia = data => {
    return {
        type: MediaActions.REQUESTING_USER_MEDIA,
        data
    }
}

export const requestUserMediaSucceeded = data => {
    return {
        type: MediaActions.REQUEST_USER_MEDIA_SUCCEEDED,
        data
    }
}

export const requestUserMediaFailed = () => {
    return {
        type: MediaActions.REQUEST_ACCESS_TOKEN_FAILED
    }
}

export const requestUserMedia = (id = 'self') => {
    return async (dispatch) => {
        try {
            dispatch(requestingUserMedia(true))
            const res = await fetchWrap(UserEndpoints.recent(id))
            if (res) {
                return dispatch(requestUserMediaSucceeded(res))
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
