import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from 'reducers'
import { Map } from 'immutable'

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk, logger))
)

export default store
