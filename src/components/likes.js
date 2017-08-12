import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'

const likes = props => (
    <View style={styles.container}>
        <Text style={styles.text} numberOfLines={1}>
            {`${props.count} Like${props.count > 1 && 's'}`}
        </Text>
    </View>
)

likes.propTypes = {
    count : PropTypes.number.isRequired
}

const styles = {
    container : {
        flexDirection : 'row',
        alignItems : 'center',
        backgroundColor : 'white',
        paddingVertical : 10,
        paddingHorizontal : 15
    },
    text : {
        color : 'black',
        fontWeight : '500'
    }
}

export default likes
