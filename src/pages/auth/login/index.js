import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import { connect } from 'react-redux'
import { requestAccessToken } from 'actions/auth'
import IconButton from 'components/iconButton'
import styles from './style'

class Login extends Component {
    static navigationOptions = {
        title : 'Welcome'
    }

    _startOAuth = () => {
        this.props.dispatch(requestAccessToken())
    }

    render() {
        return (
            <View style={styles.container}>
                <IconButton name='fingerprint' size={50} onPress={this._startOAuth} />
            </View>
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

export default connect(mapStateToProps)(Login)
