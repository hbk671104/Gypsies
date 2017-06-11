import React, { Component } from 'react'
import { Linking } from 'react-native'
import {
    View,
    Text
} from 'react-native'
import IconButton from 'components/iconButton'
import styles from './style'

export default class Login extends Component {
    static navigationOptions = {
        title : 'Welcome'
    }

    _triggerOAuth = () => {
        Linking.openURL('https://api.instagram.com/oauth/authorize/?client_id=b3224cdde5fe4853872cf87eb236531f&redirect_uri=http://localhost&response_type=token')
            .catch(err => console.error('An error occurred', err))
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <IconButton name='fingerprint' size={50} onPress={this._triggerOAuth} />
            </View>
        )
    }
}
