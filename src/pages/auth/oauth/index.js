import React, { Component } from 'react'
import {
    View,
    Text,
    WebView
} from 'react-native'
import { oAuth } from 'api/auth'
import { getUrlParams } from 'utils/urlHelper'
import styles from './style'

export default class OAuth extends Component {
    static navigationOptions = {
        title : 'Authentication'
    }

    _onNavStateChange = (props) => {
        if (props.loading) {
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
                onLoadEnd={this._onLoadEnd}
                onNavigationStateChange={this._onNavStateChange}
            />
        )
    }
}
