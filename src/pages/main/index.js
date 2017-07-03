import React, { Component } from 'react'
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

    constructor(props) {
        super(props)
        this.state = {
            itemEdge : 0
        }
        this.numberOfColumns = 3
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

    renderItem = ({ item }) => (
        <Image style={{height : this.state.itemEdge, width : this.state.itemEdge}}
            source={{uri: item.images.low_resolution.url}}
        />
    )

    renderHeader = () => (
        <View style={{height : 100, backgroundColor : 'orange'}}/>
    )

    render() {
        const { params } = this.props.navigation.state
        return (
            <View style={styles.container}>
                {
                    this.props.loading ?
                    <LoadingView />
                    :
                    <FlatList
                        onLayout={({ nativeEvent : { layout }}) => {
                            this.setState({itemEdge : layout.width / this.numberOfColumns})
                        }}
                        data={this.props.userRecent}
                        renderItem={this.renderItem}
                        ListHeaderComponent={this.renderHeader}
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
        userRecent : recent.data
    }
}

export default connect(mapStateToProps)(Main)
