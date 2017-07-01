import React, { PropTypes } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const loadingView = props => (
    <View style={[styles.container, props.style]}>
        <ActivityIndicator
            style={styles.indicator}
            animating={true}
            size='large'
        />
        <Text style={styles.text}>
            {props.title}
        </Text>
    </View>
)

loadingView.defaultProps = {
    title : 'loading...',
    style : {}
}

loadingView.propTypes = {
    title : PropTypes.string,
    style : PropTypes.object
}

const styles = {
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'white'
    },
    text : {
        fontSize : 18
    },
    indicator : {
        marginBottom : 10
    }
}

export default loadingView
