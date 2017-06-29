import React, { Component } from 'react'
import {
    View,
    Text,
    WebView
} from 'react-native'
import { connect } from 'react-redux'
import { oAuth } from 'api/auth'
import { getUrlParams } from 'utils/urlHelper'
import styles from './style'

class OAuth extends Component {
    static navigationOptions = {
        title : 'Authentication'
    }

    onNavStateChange = (props) => {
        if (!props.loading) {
            const params = getUrlParams(props.url)
            if (params && params.access_token) {
                const accessToken = params.access_token
                this.props.navigation.navigate('Main', {accessToken})
            }
        }
    }

    render() {
        return (
            <WebView style={styles.container}
                startInLoadingState
                source={{uri : oAuth}}
                onNavigationStateChange={this.onNavStateChange}
            />
        )
    }
}

const mapStateToProps = state => {
    const auth = state.auth.toJS()
    return {
        loading : auth.loading,
        access_token : auth.access_token
    }
}

export default connect(mapStateToProps)(OAuth)
