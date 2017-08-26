import React from 'react'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types'
import BottomArrow from './bottomArrow'
import styles from './style'

const imageMarker = props => (
    <View style={styles.container}>
        <Image style={styles.image}
            source={{uri : props.image.thumbnail.url}}
        />
        <BottomArrow />
    </View>
)

imageMarker.propTypes = {
    image : PropTypes.object.isRequired
}

export default imageMarker
