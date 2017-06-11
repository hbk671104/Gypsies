import React, { Component } from 'react'
import {
    View,
    Text,
    WebView
} from 'react-native'
import { oAuth } from 'api/auth'
import styles from './style'

export default class OAuth extends Component {
    static navigationOptions = {
        title : 'Authentication'
    }

    constructor(props) {
        super(props)
        this.accessToken = ''
    }

    _onNavStateChange = (props) => {
        if (props.url) {
            const tokenParam = props.url.split('#')[1]
            if (tokenParam) {
                const accessToken = tokenParam.split('=')[1]
                if (!this.accessToken) {
                    this.accessToken = accessToken
                    console.log(this.accessToken);
                }
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
