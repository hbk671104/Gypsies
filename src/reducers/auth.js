import { fromJS } from 'immutable'
import * as AuthActionTypes from 'actiontypes/auth'

const initialState = fromJS({
    loading : false,
    access_token : ''
})

const auth = (state = initialState, action) => {
    switch (action.type) {
        case AuthActionTypes.REQUESTING_ACCESS_TOKEN:
            return state.set('loading', action.data)
        case AuthActionTypes.GET_ACCESS_TOKEN_SUCCEEDED:
        case AuthActionTypes.REQUEST_ACCESS_TOKEN_SUCCEEDED:
            return state.set('access_token', action.data)
        case AuthActionTypes.REQUEST_ACCESS_TOKEN_FAILED:
            return state
        default:
            return state
    }
}

export default auth
