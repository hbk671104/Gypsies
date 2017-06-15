import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    FlatList,
    BackHandler
} from 'react-native'
import IconButton from 'components/iconButton'
import Icon from 'components/icon'
import { selfMedia } from 'api/media'
import styles from './style'

export default class Main extends Component {
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
            listData : [],
            itemEdge : 0
        }
        this.numberOfColumns = 3
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
    }

    componentDidMount() {
        const { params } = this.props.navigation.state
        fetch(`${selfMedia}${params.accessToken}`)
        .then(response => response.json())
        .then(responseJson => {
            this.setState({listData : responseJson.data})
        })
        .catch(err => {
            console.log(err);
        })
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
                <FlatList
                    onLayout={({ nativeEvent : { layout }}) => {
                        this.setState({itemEdge : layout.width / this.numberOfColumns})
                    }}
                    data={this.state.listData}
                    renderItem={this.renderItem}
                    ListHeaderComponent={this.renderHeader}
                    showsVerticalScrollIndicator={false}
                    numColumns={this.numberOfColumns}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}
