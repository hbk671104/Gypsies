import React, { Component } from 'react'
import { Provider } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'

// Store
import gypStore from 'store'

// Navigator
import navigator from 'navigator'

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

    render() {
        const Gypsies = navigator(this.state.initialRouteName)
        return (
            <Provider store={gypStore}>
                <Gypsies />
            </Provider>
        )
    }
}
