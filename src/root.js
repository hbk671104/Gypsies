import { StackNavigator } from 'react-navigation'
import Main from 'pages/main'
import Map from 'pages/map'

const root = () => {
    return StackNavigator({
        Main : {screen : Main},
        Map : {screen : Map}
    })
}

export default root
