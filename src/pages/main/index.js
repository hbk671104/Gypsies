import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import IconButton from 'components/iconButton'
import styles from './style'

export default class Main extends Component {
    static navigationOptions = ({ navigation }) => ({
        title : 'Gypsies',
        headerRight : (
            <IconButton name='map'
                iconStyle={styles.icon}
                onPress={() => {navigation.navigate('Map')}}
            />
        )
    })

    render() {
        return (
            <View style={styles.container} />
        )
    }
}
