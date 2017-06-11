import React, { Component } from 'react'
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

    _startOAuth = () => {
        this.props.navigation.navigate('OAuth')
    }

    render() {
        return (
            <View style={styles.container}>
                <IconButton name='fingerprint' size={50} onPress={this._startOAuth} />
            </View>
        )
    }
}
