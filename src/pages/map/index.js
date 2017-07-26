import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import MapView from 'react-native-maps'
import styles from './style'

export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <MapView style={styles.container}
                showsUserLocation
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                <MapView.Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324
                    }}
                    title='哈哈哈哈'
                    description='啦啦啦啦啦'
                />
            </MapView>
        )
    }
}
