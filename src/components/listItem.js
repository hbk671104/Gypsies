import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, TouchableOpacity } from 'react-native'

const listItem = props => (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => props.onAvatarTap()}>
            <Image style={styles.image} source={{ uri : props.imageUrl }} />
        </TouchableOpacity>
        <View style={styles.text.container}>
            <Text style={styles.text.title} numberOfLines={1}>
                {props.title}
            </Text>
            {
                !!props.subTitle &&　
                <TouchableOpacity onPress={() => props.onSubtitleTap()}>
                    <Text style={styles.text.subTitle} numberOfLines={1}>
                        {props.subTitle}
                    </Text>
                </TouchableOpacity>
            }
        </View>
    </View>
)

listItem.defaultProps = {
    onAvatarTap : () => {},
    onSubtitleTap : () => {}
}

listItem.propTypes = {
    imageUrl : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    subTitle : PropTypes.string,
    onAvatarTap : PropTypes.func,
    onSubtitleTap: PropTypes.func
}

const styles = {
    container : {
        flexDirection : 'row',
        alignItems : 'center',
        backgroundColor : 'white',
        paddingHorizontal : 15,
        paddingVertical : 10
    },
    image : {
        width : 40,
        height : 40,
        borderRadius : 20
    },
    text : {
        container : {
            flex : 1,
            marginLeft : 10
        },
        title : {
            color : 'black',
            fontWeight : '500',
        },
        subTitle : {
            fontSize : 12,
            color : 'darkslategrey',
            fontWeight : '300',
            marginTop : 3
        }
    }
}

export default listItem
