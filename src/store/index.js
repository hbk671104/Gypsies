import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { autoRehydrate } from 'redux-persist'
import rootReducer from 'reducers'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, logger),
        autoRehydrate()
    )
)

export default store
