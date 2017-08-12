import { Dimensions } from 'react-native'

export const screenWidth = Dimensions.get('window').width
export const properImageSize = image => ({
    width : screenWidth,
    height : screenWidth * image.height / image.width
})
