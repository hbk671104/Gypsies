import React, { Component } from 'react'
import {
    View,
    Text,
    WebView
} from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { oAuth } from 'api/auth'
import * as AuthActions from 'actions/auth'
import LoadingView from 'components/loading'
import styles from './style'

class Login extends Component {
    static navigationOptions = {
        title : 'Welcome'
    }

    _handleAccessToken = async (url) => {
        const res = await this.props.dispatch(AuthActions.extractAccessToken(url))
        if (res.type === AuthActions.requestAccessTokenSucceeded().type) {
            this.props.navigation.dispatch(NavigationActions.reset({
                index : 0,
                actions: [
                    NavigationActions.navigate({ routeName : 'Main' })
                ]
            }))
        }
    }

    _onNavStateChange = props => {
        this.props.dispatch(AuthActions.requestingAccessToken(props.loading))
        if (!props.loading) {
            this._handleAccessToken(props.url)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView style={styles.webview}
                    source={{uri : oAuth}}
                    onNavigationStateChange={this._onNavStateChange}
                />
                {
                    this.props.loading &&
                    <LoadingView style={styles.loading} />
                }
            </View>
        )
    }
}

const mapStateToProps = state => {
    const auth = state.auth
    return {
        loading : auth.loading
    }
}

export default connect(mapStateToProps)(Login)
