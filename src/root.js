import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import SplashScreen from 'react-native-splash-screen'

// Store
import gypStore from 'store'

// Navigator
import navigator from 'navigator'

export default class Root extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initialRouteName : 'Login'
        }
    }
    
    componentDidMount() {
        persistStore(gypStore, {
            whitelist : ['auth'],
            storage : AsyncStorage
        }, this.handleOnRehydrated)
    }

    handleOnRehydrated = () => {
        const accessToken = gypStore.getState().auth.access_token
        if (accessToken) {
            this.setState({initialRouteName: 'Main'})
        }
        SplashScreen.hide()
    }

    render() {
        const Gypsies = navigator(this.state.initialRouteName)
        return (
            <Provider store={gypStore}>
                <Gypsies />
            </Provider>
        )
    }
}
