import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'

const iconButton = props => (
    <Icon.Button
        color={props.color}
        backgroundColor={props.backgroundColor}
        size={props.size}
        {...props}
    />
)

iconButton.defaultProps = {
    color : '#007AFF',
    backgroundColor : 'transparent',
    size : 30
}

iconButton.propTypes = {
    name : PropTypes.string.isRequired,
    onPress : PropTypes.func.isRequired,
    color : PropTypes.string,
    backgroundColor : PropTypes.string,
    size : PropTypes.number
}

export default iconButton
