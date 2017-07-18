import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import styles from './style'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={{height : 100, backgroundColor : 'orange'}}/>
        )
    }
}
