import React from 'react'
import { Platform } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { StackNavigator } from 'react-navigation'

// Reducer
import rootReducer from 'reducers'

// Pages
import Login from 'pages/auth/login'
import OAuth from 'pages/auth/oauth'
import Main from 'pages/main'
import Map from 'pages/map'

const root = () => {
    const Gypsies = StackNavigator({
        Login : {screen : Login},
        OAuth : {screen : OAuth},
        Main : {screen : Main},
        Map : {screen : Map}
    })

    const store = createStore(
        rootReducer,
        applyMiddleware(thunk),
        applyMiddleware(logger)
    )
    return (
        <Provider store={store}>
            <Gypsies />
        </Provider>
    )
}

export default root
