import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const iconButton = (props) => (
    <Icon.Button
        color='#007AFF'
        backgroundColor='transparent'
        size={30}
        {...props}
    />
)

export default iconButton
