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
            height : 120
        },
        item : {
            container : {
                flex : 1,
                justifyContent : 'flex-end'
            },
            item : {
                marginHorizontal : 15,
                marginBottom : 20,
                borderRadius : 5
            }
        }
    }
}
