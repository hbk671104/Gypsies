import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { autoRehydrate, persistStore } from 'redux-persist'
import rootReducer from 'reducers'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, logger),
        autoRehydrate()
    )
)

export const persist = onRehydratedCallback => {
    persistStore(store, {
        whitelist : ['auth'],
        storage : AsyncStorage
    }, onRehydratedCallback)
}

export default store
