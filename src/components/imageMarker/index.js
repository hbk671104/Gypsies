import React from 'react'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'

const imageMarker = props => (
    <Image style={styles.image}
        source={{uri : props.image.standard_resolution.url}}
    />
)

imageMarker.propTypes = {
    image : PropTypes.object.isRequired
}

export default imageMarker
