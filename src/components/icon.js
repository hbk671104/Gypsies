import React, { PropTypes } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const icon = props => (
    <Icon
        size={props.size}
        {...props}
    />
)

icon.defaultProps = {
    size : 30
}

icon.propTypes = {
    name : PropTypes.string.isRequired,
    size : PropTypes.number
}

export default icon
