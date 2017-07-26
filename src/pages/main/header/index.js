import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Text,
    Image,
    findNodeHandle,
    TouchableOpacity
} from 'react-native'
import { BlurView, VibrancyView } from 'react-native-blur'
import { connect } from 'react-redux'

import { requestUserInfo } from 'actions/user'

import styles from './style'

class Header extends Component {
    static propTypes = {
        onPostTap : PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            viewRef : null
        }
    }

    componentDidMount() {
        this.props.dispatch(requestUserInfo())
    }

    imageLoaded = () => {
        this.setState({
            viewRef: findNodeHandle(this.backgroundImage)
        })
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
                    ref={img => this.backgroundImage = img}
                    source={{uri : info.profile_picture}}
                    style={styles.container.background}
                    onLoadEnd={this.imageLoaded}
                />
                <BlurView
                    style={styles.container.background}
                    viewRef={this.state.viewRef}
                    blurType='xlight'
                    blurAmount={10}
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
