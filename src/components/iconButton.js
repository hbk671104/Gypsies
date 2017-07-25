import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

const iconButton = props => (
    <Icon.Button
        color={props.color}
        backgroundColor={props.backgroundColor}
        size={props.size}
        underlayColor='transparent'
        {...props}
    />
)

iconButton.defaultProps = {
    color : 'black',
    backgroundColor : 'transparent',
    size : 20
}

iconButton.propTypes = {
    name : PropTypes.string.isRequired,
    onPress : PropTypes.func.isRequired,
    color : PropTypes.string,
    backgroundColor : PropTypes.string,
    size : PropTypes.number
}

export default iconButton
