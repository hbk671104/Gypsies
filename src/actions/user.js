import * as MediaActions from 'actiontypes/media'
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

export const requestUserMediaFailed = data => {
    return {
        type: MediaActions.REQUEST_ACCESS_TOKEN_FAILED,
        data
    }
}

export const requestUserMedia = (id = 'self') => {
    fetchWrap(UserEndpoints.recent(id), )
}
