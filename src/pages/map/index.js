import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    FlatList
} from 'react-native'
import { connect } from 'react-redux'
import MapView from 'react-native-maps'
import Swiper from 'react-native-swiper'

// Component
import ImageMarker from 'components/imageMarker'
import InfoBottom from 'pages/post/bottom'

import styles from './style'

class Map extends Component {
    static navigationOptions = {
        title : 'Map'
    }

    constructor(props) {
        super(props)
        this.markers = []
    }

    parseInitialRegion = recent => {
        if (recent && recent.length > 0) {
            const first = recent[0]
            return {
                latitude : first.location.latitude,
                longitude : first.location.longitude,
                latitudeDelta : 0.2,
                longitudeDelta : 0.2
            }
        }
        return null
    }

    handleSwiperIndexChange = index => {
        const item = this.props.recent[index]
        this.mapView.animateToCoordinate({
            latitude : item.location.latitude,
            longitude : item.location.longitude
        }, 500)
        // this.markers[index].showCallout()
    }

    handleMarkerPress = coordinate => {
        
    }

    renderMarker = (item, index) => (
        <MapView.Marker
            ref={ref => this.markers[index] = ref}
            key={item.id}
            coordinate={{
                latitude : item.location.latitude,
                longitude : item.location.longitude
            }}
            onPress={this.handleMarkerPress}
        >
            <MapView.Callout>
                <ImageMarker image={item.images} />
            </MapView.Callout>
        </MapView.Marker>
    )

    renderItem = item => (
        <View key={item.id} style={styles.bottom.item.container}>
            <InfoBottom
                style={styles.bottom.item.item}
                liteMode
                item={item}
            />
        </View>
    )

    render() {
        const { recent } = this.props
        return (
            <View style={styles.container}>
                <MapView
                    ref={ref => this.mapView = ref}
                    style={styles.map}
                    showsUserLocation
                    initialRegion={this.parseInitialRegion(recent)}
                >
                    {recent.map(this.renderMarker)}
                </MapView>
                <View style={styles.bottom.container}>
                    <Swiper
                        ref={ref => this.swiper = ref}
                        loop={false}
                        showsPagination={false}
                        onIndexChanged={this.handleSwiperIndexChange}
                    >
                        {
                            recent.map(item => this.renderItem(item))
                        }
                    </Swiper>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    const recent = state.user.recent
    return {
        loading : recent.loading,
        recent : recent.self ?
        recent.self.data.filter(item => item.location)
        :
        []
    }
}

export default connect(mapStateToProps)(Map)
