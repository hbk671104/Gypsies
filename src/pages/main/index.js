import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    FlatList
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
            listData : []
        }
    }

    componentDidMount() {
        const { params } = this.props.navigation.state
        console.log(params.accessToken);
        fetch(`${selfMedia}${params.accessToken}`)
        .then(response => response.json())
        .then(responseJson => {
            this.setState({listData : responseJson.data})
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        const { params } = this.props.navigation.state
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.listData}
                    renderItem={({item}) => (
                        <Image style={{height : 100, width : 100}}
                            source={{uri: item.images.low_resolution.url}}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={3}
                    columnWrapperStyle={{}}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}
