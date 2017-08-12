import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native'
import { properImageSize } from 'utils'
import ListItem from 'components/listItem'
import styles from './style'

export default class Post extends Component {
    static navigationOptions = {
        title : 'Post'
    }

    constructor(props) {
        super(props)
        this.state = {
            containerWidth : 0
        }
    }

    render() {
        const { item } = this.props.navigation.state.params
        console.log(item);
        const imageStyle = properImageSize(this.state.containerWidth, item.images.standard_resolution)
        return (
            <View style={styles.container}
                onLayout={({ nativeEvent : { layout }}) => {
                    this.setState({containerWidth : layout.width})
                }}
            >
                <ScrollView>
                    <ListItem
                        imageUrl={item.user.profile_picture}
                        title={item.user.username}
                        subTitle={item.location.name}
                    />
                    <Image style={imageStyle}
                        source={{uri : item.images.standard_resolution.url}}
                    />
                </ScrollView>
            </View>
        )
    }
}
