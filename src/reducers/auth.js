import { fromJS, toJS } from 'immutable'
import * as AuthActionTypes from 'actiontypes/auth'

const initialState = {
    loading : false,
    access_token : ''
}

const auth = (state = initialState, action) => {
    const immutableState = fromJS(state)
    switch (action.type) {
        case AuthActionTypes.REQUESTING_ACCESS_TOKEN:
            return immutableState.set('loading', action.data).toJS()
        case AuthActionTypes.GET_ACCESS_TOKEN_SUCCEEDED:
        case AuthActionTypes.REQUEST_ACCESS_TOKEN_SUCCEEDED:
            return immutableState.set('access_token', action.data).toJS()
        case AuthActionTypes.REQUEST_ACCESS_TOKEN_FAILED:
        default:
            return state
    }
}

export default auth
