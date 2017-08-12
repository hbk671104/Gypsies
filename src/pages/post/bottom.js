import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'

const bottom = props => (
    <View style={styles.bottom.container}>
        {
            props.likeCount !== 0 &&
            <View>
                <Text style={styles.bottom.text.text} numberOfLines={1}>
                    {props.likeCount}
                    <Text style={styles.bottom.text.textLabel}>
                        {` Like${props.likeCount > 1 && 's'}`}
                    </Text>
                </Text>
            </View>
        }
        {
            !!props.caption &&
            <View>
                <Text style={styles.bottom.text.text}>
                    {props.userName}
                    <Text style={styles.bottom.text.textLabel}>
                        {` ${props.caption}`}
                    </Text>
                </Text>
            </View>
        }
    </View>
)

bottom.propTypes = {
    likeCount : PropTypes.number.isRequired,
    userName : PropTypes.string.isRequired,
    caption : PropTypes.string.isRequired
}

export default bottom
