import { fromJS, toJS } from 'immutable'
import * as UserActionTypes from 'actiontypes/user'

const initialState = {
    info : {
        loading : false
    },
    recent : {
        loading : false
    }
}

const user = (state = initialState, action) => {
    const immutableState = fromJS(state)
    switch (action.type) {
        case UserActionTypes.REQUESTING_USER_INFO:
            return immutableState.setIn(['info', 'loading'], action.data).toJS()
        case UserActionTypes.REQUEST_USER_INFO_SUCCEEDED:
            return immutableState.setIn(['info', action.id], action.data).toJS()
        case UserActionTypes.REQUESTING_USER_MEDIA:
            return immutableState.setIn(['recent', 'loading'], action.data).toJS()
        case UserActionTypes.REQUEST_USER_MEDIA_SUCCEEDED:
            return immutableState.setIn(['recent', action.id], action.data).toJS()
        case UserActionTypes.REQUEST_USER_INFO_FAILED:
        case UserActionTypes.REQUEST_USER_MEDIA_FAILED:
        default:
            return state
    }
}

export default user
