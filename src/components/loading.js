import React, { PropTypes } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const loadingView = props => (
    <View style={styles.container}>
        <Text style={styles.text}>
            {props.title}
        </Text>
        <ActivityIndicator
            style={styles.indicator}
            animating={true}
            size='large'
        />
    </View>
)

loadingView.defaultProps = {
    title : 'loading...'
}

loadingView.propTypes = {
    title : PropTypes.string
}

const styles = {
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    text : {
        fontSize : 18
    },
    indicator : {
        marginTop : 10
    }
}

export default loadingView
