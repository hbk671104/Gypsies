import React, { Component } from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import styles from './style'

export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            containerWidth : 0
        }
    }

    calculateImageHeight = image => {
        return {
            width : this.state.containerWidth,
            height : this.state.containerWidth * image.height / image.width
        }
    }

    render() {
        const { item } = this.props.navigation.state.params
        const imageStyle = this.calculateImageHeight(item.images.standard_resolution)
        return (
            <View style={styles.container}
                onLayout={({ nativeEvent : { layout }}) => {
                    this.setState({containerWidth : layout.width})
                }}
            >
                <Image style={imageStyle} source={{uri : item.images.standard_resolution.url}} />
            </View>
        )
    }
}
