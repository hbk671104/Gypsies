import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native'
import { properImageSize } from 'utils'
import ListItem from 'components/listItem'
import LoadingView from 'components/loading'
import Bottom from './bottom'
import styles from './style'

export default class Post extends Component {
    static navigationOptions = {
        title : 'Post'
    }

    constructor(props) {
        super(props)
        this.state = {
            imageLoading : true
        }
    }

    handleLikeTap = () => {

    }

    handleCommentTap = () => {

    }

    onImageLoad = () => {
        this.setState({imageLoading : false})
    }

    render() {
        const { item } = this.props.navigation.state.params
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
                        onLoad={this.onImageLoad}
                    >
                        {
                            this.state.imageLoading && <LoadingView />
                        }
                    </Image>
                    <Bottom
                        likeCount={item.likes.count}
                        userName={item.user.username}
                        caption={item.caption.text}
                        tags={item.tags}
                        commentCount={item.comments.count}
                        createdTime={item.created_time}
                        onLikeTap={this.handleLikeTap}
                        onCommentTap={this.handleCommentTap}
                    />
                </ScrollView>
            </View>
        )
    }
}
