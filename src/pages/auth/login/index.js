import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import styles from './style'

export default class Login extends Component {
    static navigationOptions = {
        title : 'Welcome'
    }

    render() {
        return (
            <View style={styles.container} />
        )
    }
}
