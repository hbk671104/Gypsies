import React, { Component } from 'react'
import { Provider } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'

// Store
import gypStore, { persist } from 'store'

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
        persist(this.handleOnRehydrated)
    }

    handleOnRehydrated = () => {
        const { accessToken } = gypStore.getState().auth
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
