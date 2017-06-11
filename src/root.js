import { StackNavigator } from 'react-navigation'
import Login from 'pages/auth/login'
import Main from 'pages/main'
import Map from 'pages/map'

const root = () => {
    return StackNavigator({
        Login : {screen : Login},
        Main : {screen : Main},
        Map : {screen : Map}
    })
}

export default root
