import React from 'react'
import { Platform } from 'react-native'
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'

// Pages
import Login from 'pages/auth/login'
import Main from 'pages/main'
import Map from 'pages/map'

// Store
import store from 'store'

const root = () => {
    const Gypsies = StackNavigator({
        Login : {screen : Login},
        Main : {screen : Main},
        Map : {screen : Map}
    })
    
    return (
        <Provider store={store}>
            <Gypsies />
        </Provider>
    )
}

export default root
