import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native'
import { properImageSize } from 'utils'
import ListItem from 'components/listItem'
import Bottom from './bottom'
import styles from './style'

export default class Post extends Component {
    static navigationOptions = {
        title : 'Post'
    }

    render() {
        const { item } = this.props.navigation.state.params
        console.log(item);
        const imageStyle = properImageSize(item.images.standard_resolution)
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ListItem
                        imageUrl={item.user.profile_picture}
                        title={item.user.username}
                        subTitle={item.location.name}
                    />
                    <Image style={imageStyle}
                        source={{uri : item.images.standard_resolution.url}}
                    />
                    <Bottom
                        likeCount={item.likes.count}
                        userName={item.user.username}
                        caption={item.caption.text}
                    />
                </ScrollView>
            </View>
        )
    }
}
