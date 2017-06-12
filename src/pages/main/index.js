import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import IconButton from 'components/iconButton'
import Icon from 'components/icon'
import styles from './style'

export default class Main extends Component {
    static navigationOptions = ({ navigation }) => ({
        title : 'Gypsies',
        headerLeft : null, // Disable back button
        headerRight : (
            <IconButton name='map'
                iconStyle={styles.iconButton}
                onPress={() => {navigation.navigate('Map')}}
            />
        )
    })

    render() {
        const { params } = this.props.navigation.state
        return (
            <View style={styles.container}>
                <Text>{params.accessToken}</Text>
            </View>
        )
    }
}
