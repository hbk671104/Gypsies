import React from 'react'
import { Platform } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Login from 'pages/auth/login'
import Main from 'pages/main'
import Map from 'pages/map'

const root = () => {
    const Gypsies = StackNavigator({
        Login : {screen : Login},
        Main : {
            screen : Main,
            path : 'main/:accessToken'
        },
        Map : {screen : Map}
    })
    
    // on Android, the URI prefix typically contains a host in addition to scheme
    const prefix = Platform.OS == 'android' ? 'gypsies://gypsies/' : 'gypsies://'
    return () => <Gypsies uriPrefix={prefix} />
}

export default root
