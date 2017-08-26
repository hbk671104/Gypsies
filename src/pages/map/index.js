import React, { Component } from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import { connect } from 'react-redux'
import MapView from 'react-native-maps'
import ImageMarker from 'components/imageMarker'
import styles from './style'

class Map extends Component {
    static navigationOptions = {
        title : 'Map'
    }

    constructor(props) {
        super(props)
        this.state = {
            region : this.parseInitialRegion(props.recent)
        }
    }

    parseInitialRegion = recent => {
        if (recent && recent.length > 0) {
            const first = recent[0]
            return {
                latitude : first.location.latitude,
                longitude : first.location.longitude,
                latitudeDelta : 0.0922,
                longitudeDelta : 0.0421
            }
        }
        return null
    }

    renderMarker = item => (
        <MapView.Marker key={item.id}
            coordinate={{
                latitude : item.location.latitude,
                longitude : item.location.longitude
            }}
            title={item.location.name}
        >
            <ImageMarker image={item.images} />
        </MapView.Marker>
    )

    render() {
        const { recent } = this.props
        return (
            <MapView style={styles.container}
                showsUserLocation
                region={this.state.region}
            >
                {recent.map(item => this.renderMarker(item))}
            </MapView>
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
