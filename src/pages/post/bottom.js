import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'

const bottom = props => (
    <View style={styles.bottom.container}>
        {
            props.likeCount !== 0 &&
            <Text style={styles.bottom.text} numberOfLines={1}>
                {`${props.likeCount} Like${props.likeCount > 1 && 's'}`}
            </Text>
        }
    </View>
)

bottom.propTypes = {
    likeCount : PropTypes.number.isRequired
}

export default bottom
