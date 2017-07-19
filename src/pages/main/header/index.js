import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import { connect } from 'react-redux'

import { requestUserInfo } from 'actions/user'

import styles from './style'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.props.dispatch(requestUserInfo())
    }

    render() {
        return (
            <View style={{height : 100, backgroundColor : 'orange'}}/>
        )
    }
}

const mapStateToProps = state => {
    const info = state.user.info
    return {
        loading : info.loading,
        info : info.self ? info.self.data : {}
    }
}

export default connect(mapStateToProps)(Header)
