import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Text,
    Image,
    FlatList,
    BackHandler
} from 'react-native'
import { connect } from 'react-redux'

import IconButton from 'components/iconButton'
import Icon from 'components/icon'
import LoadingView from 'components/loading'

import { requestUserMedia } from 'actions/user'

import Header from './header'
import styles from './style'

class Main extends Component {
    static navigationOptions = ({ navigation }) => ({
        title : 'Gypsies',
        headerLeft : null, // Disable back button
        headerRight : (
            <IconButton name='map'
                iconStyle={styles.iconButton}
                onPress={() => {navigation.navigate('Map')}}
            />
        )
    })

    static defaultProps = {
        numberOfColumns : 3
    }

    static propTypes = {
        numberOfColumns : PropTypes.number
    }

    constructor(props) {
        super(props)
        this.state = {
            itemEdge : 0,
            isRefresh : false
        }
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
    }

    componentDidMount() {
        this.props.dispatch(requestUserMedia())
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
    }

    handleBackPress = () => {
        // Disable nav back
        return true
    }

    handlePostTap = () => {
        this.mainFlatlist.scrollToIndex({index : 0})
    }

    handleRefresh = () => {
        this.setState({isRefresh : true}, () => {
            this.props.dispatch(requestUserMedia())
        })
    }

    renderItem = ({ item }) => (
        <Image style={{height : this.state.itemEdge, width : this.state.itemEdge}}
            source={{uri: item.images.low_resolution.url}}
        />
    )

    renderHeader = () => (
        <Header onPostTap={this.handlePostTap} />
    )

    render() {
        const { numberOfColumns } = this.props
        return (
            <View style={styles.container}>
                {
                    this.props.loading && !this.state.isRefresh ?
                    <LoadingView />
                    :
                    <FlatList
                        ref={ref => this.mainFlatlist = ref}
                        onLayout={({ nativeEvent : { layout }}) => {
                            this.setState({itemEdge : layout.width / numberOfColumns})
                        }}
                        data={this.props.recent}
                        renderItem={this.renderItem}
                        ListHeaderComponent={this.renderHeader}
                        onRefresh={this.handleRefresh}
                        refreshing={this.props.loading}
                        showsVerticalScrollIndicator={false}
                        numColumns={numberOfColumns}
                        keyExtractor={item => item.id}
                    />
                }
            </View>
        )
    }
}

const mapStateToProps = state => {
    const recent = state.user.recent
    return {
        loading : recent.loading,
        recent : recent.self ? recent.self.data : []
    }
}

export default connect(mapStateToProps)(Main)
