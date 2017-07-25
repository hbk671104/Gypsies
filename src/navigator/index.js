import { StackNavigator } from 'react-navigation'

// Pages
import Login from 'pages/auth/login'
import Main from 'pages/main'
import Map from 'pages/map'

import styles from './style'

const navigator = initialRouteName => {
    return StackNavigator({
        Login : {screen : Login},
        Main : {screen : Main},
        Map : {screen : Map}
    },{
        initialRouteName,
        navigationOptions : styles
    })
}

export default navigator
