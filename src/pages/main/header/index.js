import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'

// Actions
import { requestUserInfo } from 'actions/user'

// Style
import styles from './style'

class Header extends Component {
    static propTypes = {
        onPostTap : PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.dispatch(requestUserInfo())
    }

    renderContent = info => {
        const { onPostTap } = this.props
        return (
            <View style={styles.container.content}>
                <View style={styles.container.top}>
                    <Image style={styles.image.avatar} source={{uri : info.profile_picture}} />
                    <Text style={styles.text.title}>{info.username}</Text>
                    {
                        !!info.bio &&
                        <Text style={styles.text.bio} numberOfLines={1}>{info.bio}</Text>
                    }
                </View>
                {
                    !!info.counts &&
                    <View style={styles.container.bottom}>
                        <TouchableOpacity style={styles.container.chunk} onPress={() => onPostTap()}>
                            <Text style={styles.text.title} numberOfLines={1}>
                                {info.counts.media}
                            </Text>
                            <Text style={styles.text.label}>posts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container.chunk}>
                            <Text style={styles.text.title} numberOfLines={1}>
                                {info.counts.followed_by}
                            </Text>
                            <Text style={styles.text.label}>followers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container.chunk}>
                            <Text style={styles.text.title} numberOfLines={1}>
                                {info.counts.follows}
                            </Text>
                            <Text style={styles.text.label}>following</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        )
    }

    render() {
        const { info } = this.props
        return (
            <View style={styles.container.overall}>
                <Image
                    style={styles.container.background}
                    source={{uri : info.profile_picture}}
                    blurRadius={5}
                />
                <View
                    style={[styles.container.background, styles.container.backgroundCover]}
                />
                {this.renderContent(info)}
            </View>
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
