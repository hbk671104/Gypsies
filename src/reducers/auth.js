import { fromJS } from 'immutable'
import * as AuthActionTypes from 'actiontypes/auth'

const initialState = fromJS({
    loading : false,
    access_token : ''
})

const auth = (state = initialState, action) => {
    switch (action.type) {
        case AuthActionTypes.REQUEST_ACCESS_TOKEN_START:
            return state.set('loading', true)
        case AuthActionTypes.REQUEST_ACCESS_TOKEN_SUCCEEDED:
            return state.set('loading', false).set('access_token', action.data)
        case AuthActionTypes.REQUEST_ACCESS_TOKEN_FAILED:
            return state.set('loading', false).set('access_token', '')
        default:
            return state
    }
}

export default auth
