import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    FlatList
} from 'react-native'
import { connect } from 'react-redux'
import MapView from 'react-native-maps'
import ImageMarker from 'components/imageMarker'
import InfoBottom from 'pages/post/bottom'
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

    renderMarker = (item, index) => (
        <MapView.Marker key={item.id}
            coordinate={{
                latitude : item.location.latitude,
                longitude : item.location.longitude
            }}
        >
            <MapView.Callout>
                <ImageMarker image={item.images} />
            </MapView.Callout>
        </MapView.Marker>
    )

    renderItem = ({ item }) => (
        <InfoBottom
            style={styles.bottom.item}
            liteMode
            item={item}
        />
    )

    render() {
        const { recent } = this.props
        return (
            <View style={styles.container}>
                <MapView style={styles.map}
                    showsUserLocation
                    loadingEnabled
                    region={this.state.region}
                >
                    {recent.map(this.renderMarker)}
                </MapView>
                <View style={styles.bottom.container}>
                    <FlatList
                        contentContainerStyle={styles.bottom.list}
                        horizontal
                        pagingEnabled
                        ref={ref => this.maplist = ref}
                        data={this.props.recent}
                        renderItem={this.renderItem}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                    />
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
