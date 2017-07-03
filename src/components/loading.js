import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import Spinner from 'react-native-spinkit'

const loadingView = props => (
    <View style={[styles.container, props.style]}>
        <Spinner
            style={styles.indicator}
            type='ThreeBounce'
            color='#007AFF'
            isVisible={true}
            size={40}
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
