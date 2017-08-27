import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import Highlighter from 'react-native-highlight-words'
import moment from 'moment'
import styles from './style'

const bottom = props => (
    <View style={[styles.bottom.container, props.style]}>
        {
            props.item.likes.count !== 0 &&
            <TouchableOpacity onPress={() => props.onLikeTap()}>
                <Text style={styles.bottom.text.likeCount} numberOfLines={1}>
                    {props.item.likes.count}
                    <Text style={styles.bottom.text.likeLabel}>
                        {` Like${props.item.likes.count > 1 && 's'}`}
                    </Text>
                </Text>
            </TouchableOpacity>
        }
        {
            !!props.item.caption.text &&
            <View style={styles.bottom.contentContainer}>
                <Text style={styles.bottom.text.userLabel}
                    {...props.liteMode ? {numberOfLines : 2} : {}}
                >
                    {props.item.user.username}
                    <Highlighter style={styles.bottom.text.caption}
                        highlightStyle={styles.bottom.text.highlightCaption}
                        searchWords={props.item.tags.map(tag => `#${tag}`)}
                        textToHighlight={` ${props.item.caption.text}`}
                    />
                </Text>
            </View>
        }
        {
            !props.liteMode &&
            props.item.comments.count !== 0 &&
            <TouchableOpacity style={styles.bottom.contentContainer} onPress={() => props.onCommentTap()}>
                <Text style={styles.bottom.text.comment} numberOfLines={1}>
                    {`View ${props.item.comments.count > 1 ? `all ${props.item.comments.count} comments` : `1 comment`}`}
                </Text>
            </TouchableOpacity>
        }
        <View style={styles.bottom.contentContainer}>
            <Text style={styles.bottom.text.time} numberOfLines={1}>
                {moment.unix(props.item.created_time).format('MMMM D, YYYY')}
            </Text>
        </View>
    </View>
)

bottom.defaultProps = {
    onLikeTap : () => {},
    onCommentTap : () => {},
    liteMode : false,
    style : {}
}

bottom.propTypes = {
    item : PropTypes.object.isRequired,
    onLikeTap : PropTypes.func,
    onCommentTap : PropTypes.func,
    liteMode : PropTypes.bool,
    style : PropTypes.object
}

export default bottom
