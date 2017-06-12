import React, { PropTypes } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const icon = (props) => (
    <Icon
        size={30}
        {...props}
    />
)

icon.propTypes = {
    name : PropTypes.string.isRequired
}

export default icon
