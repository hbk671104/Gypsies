import { StyleSheet } from 'react-native'
import { screenWidth } from 'utils'

export default {
    container : {
        flex : 1,
        justifyContent : 'flex-end'
    },
    map : {
        ...StyleSheet.absoluteFillObject
    },
    bottom : {
        container : {
            padding : 15
        },
        list : {
            alignItems : 'flex-end'
        },
        item : {
            width : screenWidth - 30 - 20,
            marginHorizontal : 10,
            borderRadius : 5
        }
    }
}
