import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import styles from './style'

export default class Main extends Component {
    static navigationOptions = {
        title: 'Gypsies',
    }

    render() {
        return (
            <View style={styles.container} />
        )
    }
}
