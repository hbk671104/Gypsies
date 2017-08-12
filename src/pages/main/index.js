import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Text,
    Image,
    FlatList,
    BackHandler,
    TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { screenWidth } from 'utils'

// Component
import IconButton from 'components/iconButton'
import LoadingView from 'components/loading'

// Action
import { requestUserMedia } from 'actions/user'

// Local shit
import Header from './header'
import styles from './style'

class Main extends Component {
    static navigationOptions = ({ navigation }) => ({
        title : 'Gypsies',
        headerLeft : null, // Disable back button
        headerRight : (
            <IconButton name='map-o'
                iconStyle={styles.iconButton}
                onPress={() => {navigation.navigate('Map')}}
            />
        )
    })

    constructor(props) {
        super(props)
        this.state = {
            fromRefresh : false
        }
        this.numberOfColumns = 3
        this.itemEdge = screenWidth / this.numberOfColumns
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
        this.setState({fromRefresh : true}, () => {
            this.props.dispatch(requestUserMedia())
        })
    }

    handleItemTap = item => {
        const { navigate } = this.props.navigation
        navigate('Post', {item})
    }

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this.handleItemTap(item)}>
            <Image style={{height : this.itemEdge, width : this.itemEdge}}
                source={{uri: item.images.low_resolution.url}}
            />
        </TouchableOpacity>
    )

    renderHeader = () => <Header onPostTap={this.handlePostTap} />

    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.loading && !this.state.fromRefresh ?
                    <LoadingView />
                    :
                    <FlatList
                        ref={ref => this.mainFlatlist = ref}
                        data={this.props.recent}
                        renderItem={this.renderItem}
                        ListHeaderComponent={this.renderHeader}
                        onRefresh={this.handleRefresh}
                        refreshing={this.props.loading}
                        showsVerticalScrollIndicator={false}
                        numColumns={this.numberOfColumns}
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
