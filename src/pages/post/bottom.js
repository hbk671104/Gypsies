import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import Highlighter from 'react-native-highlight-words'
import moment from 'moment'
import styles from './style'

const bottom = props => (
    <View style={styles.bottom.container}>
        {
            props.likeCount !== 0 &&
            <TouchableOpacity onPress={() => props.onLikeTap()}>
                <Text style={styles.bottom.text.likeCount} numberOfLines={1}>
                    {props.likeCount}
                    <Text style={styles.bottom.text.likeLabel}>
                        {` Like${props.likeCount > 1 && 's'}`}
                    </Text>
                </Text>
            </TouchableOpacity>
        }
        {
            !!props.caption &&
            <View style={styles.bottom.contentContainer}>
                <Text style={styles.bottom.text.captionLabel}>
                    {props.userName}
                    <Highlighter style={styles.bottom.text.caption}
                        highlightStyle={styles.bottom.text.highlightCaption}
                        searchWords={props.tags.map(tag => `#${tag}`)}
                        textToHighlight={` ${props.caption}`}
                    />
                </Text>
            </View>
        }
        {
            props.commentCount !== 0 &&
            <TouchableOpacity style={styles.bottom.contentContainer} onPress={() => props.onCommentTap()}>
                <Text style={styles.bottom.text.comment} numberOfLines={1}>
                    {`View ${props.commentCount > 1 ? `all ${props.commentCount} comments` : `1 comment`}`}
                </Text>
            </TouchableOpacity>
        }
        <View style={styles.bottom.contentContainer}>
            <Text style={styles.bottom.text.time} numberOfLines={1}>
                {moment.unix(props.createdTime).format('MMMM D, YYYY')}
            </Text>
        </View>
    </View>
)

bottom.defaultProps = {
    tags : [],
    onLikeTap : () => {},
    onCommentTap : () => {}
}

bottom.propTypes = {
    likeCount : PropTypes.number.isRequired,
    userName : PropTypes.string.isRequired,
    caption : PropTypes.string.isRequired,
    tags : PropTypes.array,
    commentCount : PropTypes.number.isRequired,
    createdTime : PropTypes.string.isRequired,
    onLikeTap : PropTypes.func,
    onCommentTap : PropTypes.func
}

export default bottom
