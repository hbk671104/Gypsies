import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    findNodeHandle
} from 'react-native'
import { BlurView, VibrancyView } from 'react-native-blur'
import { connect } from 'react-redux'

import { requestUserInfo } from 'actions/user'

import styles from './style'

class Header extends Component {
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

    renderContent = info => (
        <View style={styles.container.content}>
            <View style={styles.container.top}>
                <Image style={styles.image.avatar} source={{uri : info.profile_picture}} />
                <Text style={styles.text.title}>{info.username}</Text>
                <Text style={styles.text.bio}>{info.bio}</Text>
            </View>
            {
                !!info.counts &&
                <View style={styles.container.bottom}>
                    <View style={styles.container.chunk}>
                        <Text style={styles.text.title}>{info.counts.media}</Text>
                        <Text style={styles.text.label}>posts</Text>
                    </View>
                    <View style={styles.container.chunk}>
                        <Text style={styles.text.title}>{info.counts.followed_by}</Text>
                        <Text style={styles.text.label}>followers</Text>
                    </View>
                    <View style={styles.container.chunk}>
                        <Text style={styles.text.title}>{info.counts.follows}</Text>
                        <Text style={styles.text.label}>following</Text>
                    </View>
                </View>
            }
        </View>
    )

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
