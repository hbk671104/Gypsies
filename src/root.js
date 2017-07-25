import React, { Component } from 'react'
import { Platform } from 'react-native'
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import SplashScreen from 'react-native-splash-screen'

// Pages
import Login from 'pages/auth/login'
import Main from 'pages/main'
import Map from 'pages/map'

// Store
import gypStore from 'store'

// Action
import { getAccessToken, getAccessTokenSucceeded } from 'actions/auth'

export default class Root extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initialRouteName : 'Login'
        }
    }

    async componentDidMount() {
        const res = await gypStore.dispatch(getAccessToken())
        if (res.type === getAccessTokenSucceeded().type) {
            this.setState({initialRouteName: 'Main'})
        }
        SplashScreen.hide()
    }

    _configNavigator = () => {
        return StackNavigator({
            Login : {screen : Login},
            Main : {screen : Main},
            Map : {screen : Map}
        },{
            initialRouteName : this.state.initialRouteName,
            navigationOptions : {
                headerTintColor : 'black'
            }
        })
    }

    render() {
        const Gypsies = this._configNavigator()
        return (
            <Provider store={gypStore}>
                <Gypsies />
            </Provider>
        )
    }
}
