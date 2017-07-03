import { fromJS, toJS } from 'immutable'
import * as UserActionTypes from 'actiontypes/user'

const initialState = {
    recent : {
        loading : false,
        data : [],
        pagination : {}
    }
}

const user = (state = initialState, action) => {
    const immutableState = fromJS(state)
    switch (action.type) {
        case UserActionTypes.REQUESTING_USER_MEDIA:
            return immutableState.setIn(['recent', 'loading'], action.data).toJS()
        case UserActionTypes.REQUEST_USER_MEDIA_SUCCEEDED:
            return immutableState.mergeIn(['recent'], action.data).toJS()
        case UserActionTypes.REQUEST_USER_MEDIA_FAILED:
        default:
            return state
    }
}

export default user
