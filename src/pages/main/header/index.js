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
                <View style={{flexDirection : 'row'}}>
                    <Text>{info.username}</Text>
                    {!!info.full_name && <Text>({info.full_name})</Text>}
                </View>
                <Text>{info.bio}</Text>
            </View>
            {
                !!info.counts &&
                <View style={styles.container.bottom}>
                    <View style={styles.container.chunk}>
                        <Text>Posts</Text>
                        <Text>{info.counts.media}</Text>
                    </View>
                    <View style={styles.container.chunk}>
                        <Text>Followers</Text>
                        <Text>{info.counts.followed_by}</Text>
                    </View>
                    <View style={styles.container.chunk}>
                        <Text>Following</Text>
                        <Text>{info.counts.follows}</Text>
                    </View>
                </View>
            }
        </View>
    )

    render() {
        const { info } = this.props
        console.log(info.counts);
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
